const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri);

	try {
		await client.connect();
		// console.log(
		// 	createReservationDocument(
		// 		'Infinite Views',
		// 		[new Date('2021-12-31'), new Date('2022-01-01')],
		// 		{
		// 			pricePerNight: 150,
		// 			specialRequests: 'Late checkout',
		// 			breakfastIncluded: true,
		// 		}
		// 	)
		// );

		await createReservation(
			client,
			'april@example.com',
			'Infinite Views',
			[new Date('2021-12-31'), new Date('2022-01-01')],
			{
				pricePerNight: 150,
				specialRequests: 'Late checkout',
				breakfastIncluded: true,
			}
		);
	} catch (error) {
		console.log(error.message);
	} finally {
		await client.close();
	}
}

main()
	.then(() => console.log('Main Function Started'))
	.catch((error) => error.message);

function createReservationDocument(
	listingName,
	reservationDates,
	reservationDetails
) {
	const reservation = {
		name: listingName,
		dates: reservationDates,
	};

	for (const key in reservationDetails) {
		reservation[key] = reservationDetails[key];
	}

	return reservation;
}

async function createReservation(
	client,
	userEmail,
	listingName,
	reservationDates,
	reservationDetails
) {
	const usersCollection = client.db('sample_airbnb').collection('users');

	const listingsAndReviewsCollection = client
		.db('sample_airbnb')
		.collection('listingsAndReviews');

	const reservation = createReservationDocument(
		listingName,
		reservationDates,
		reservationDetails
	);

	const session = client.startSession();

	const transactionOptions = {
		readPreference: 'primary',
		readConcern: { level: 'local' },
		writeConcern: { w: 'majority' },
	};

	try {
		const transactionResult = await session.withTransaction(async () => {
			const userUpdateResult = await usersCollection.updateOne(
				{ email: userEmail },
				{ $addToSet: { reservations: reservation } },
				{ session }
			);
			console.log(userUpdateResult.matchedCount);
			console.log(userUpdateResult.modifiedCount);

			const isListingReservedResult =
				await listingsAndReviewsCollection.findOne(
					{ name: listingName },
					{ datesReserved: { $in: reservationDates } },
					{ session }
				);

			if (isListingReservedResult) {
				await session.abortTransaction();
				console.log(isListingReservedResult);
				console.error(
					'Listing is reserved on one of the dates. Abort transaction'
				);
				return;
			}

			const listingsAndReviewsUpdateResult =
				await listingsAndReviewsCollection.updateOne(
					{
						name: listingName,
					},
					{ $addToSet: { datesReserved: { $each: reservationDates } } },
					{ session }
				);
			console.log(listingsAndReviewsUpdateResult.matchedCount);
			console.log(listingsAndReviewsUpdateResult.modifiedCount);
		}, transactionOptions);

		if (transactionResult) {
			console.log('Transaction was successful');
		} else {
			console.log('Transaction was intentionally aborted');
		}
	} catch (error) {
		console.log('Error: ' + error.message);
	} finally {
		await session.endSession();
	}
}
