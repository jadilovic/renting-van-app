const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

async function main() {
	const uri = mongoURI;

	const client = new MongoClient(uri);

	try {
		await client.connect();

		// await listDatabases(client);

		// await createListing(client, {
		// 	name: 'Bosanski Novi App',
		// 	description: 'Very big app',
		// 	bedrooms: 5,
		// 	bathrooms: 3,
		// });

		// await createMultipleListings(client, [
		// 	{
		// 		name: 'Bihac App',
		// 		description: 'Very big app',
		// 		bedrooms: 5,
		// 		bathrooms: 3,
		// 	},
		// 	{
		// 		name: 'Bihac App',
		// 		description: 'Very big app',
		// 		bedrooms: 5,
		// 		bathrooms: 3,
		// 	},
		// 	{
		// 		name: 'Bihac App',
		// 		description: 'Very big app',
		// 		bedrooms: 5,
		// 		bathrooms: 3,
		// 	},
		// 	{
		// 		name: 'Bihac App',
		// 		description: 'Very big app',
		// 		bedrooms: 5,
		// 		bathrooms: 3,
		// 	},
		// ]);

		// await findOneListingByName(client, 'Bihac App');

		// await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
		// 	minimumNumberOfBedrooms: 4,
		// 	minimumNumberOfBathrooms: 2,
		// 	maximumNumberOfResults: 5,
		// });

		// await updateListingByName(client, 'Bihac App', {
		// 	bedrooms: 1,
		// 	bathrooms: 8,
		// });

		// await upsertListingByName(client, 'Bihac Novi App', {
		// 	name: 'Bihac Novi App',
		// 	bedrooms: 336,
		// 	bathrooms: 336,
		// });

		// await updateAllListingsToHavePropertyType(client);

		// await deleteListingByName(client, 'Bihac App');

		// await updateAllBihacListings(client);

		// await deleteListingsScrapedBeforeDate(client, new Date('2019-02-16'));
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
}

main().catch((error) => console.log(error));

async function deleteListingsScrapedBeforeDate(client, date) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.deleteMany({ last_scraped: { $lt: date } });

	console.log(result);
	console.log(result.deletedCount);
}

async function deleteListingByName(client, listingName) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.deleteOne({ name: listingName });

	console.log(result);
	console.log(result.deletedCount);
}

async function updateAllBihacListings(client) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.updateMany({ name: 'Bihac App' }, { $set: { canton: 'USK' } });

	console.log(result);
	console.log(result.matchedCount);
	console.log(result.modifiedCount);
}

async function updateAllListingsToHavePropertyType(client) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.updateMany(
			{ property_type: { $exists: false } },
			{ $set: { property_type: 'Unknown' } }
		);

	console.log(result.matchedCount);
	console.log(result.modifiedCount);
}

async function createListing(client, newListing) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.insertOne(newListing);

	console.log(result);
	console.log(`New listing created with inserted ID: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.insertMany(newListings);

	console.log('Created new listing ids:');
	console.log(result.insertedIds);
}

async function findOneListingByName(client, listingName) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.findOne({ name: listingName });

	if (result) {
		console.log('Found one listing:');
		console.log(result);
	} else {
		console.log('No listing found');
	}
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(
	client,
	{
		minimumNumberOfBedrooms = 0,
		minimumNumberOfBathrooms = 0,
		maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
	} = {}
) {
	const cursor = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.find({
			bedrooms: { $gte: minimumNumberOfBedrooms },
			bathrooms: { $gte: minimumNumberOfBathrooms },
		})
		.sort({ last_review: -1 })
		.limit(maximumNumberOfResults);

	const results = await cursor.toArray();

	if (results.length > 0) {
		results.forEach((item) => console.log(`Name: ${item.name}`));
	}
}

async function updateListingByName(client, nameOfListing, updatedListing) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.updateOne({ name: nameOfListing }, { $set: updatedListing });

	console.log(result.matchedCount);
	console.log(result.modifiedCount);
}

async function upsertListingByName(client, nameOfListing, updatedListing) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.updateOne(
			{ name: nameOfListing },
			{ $set: updatedListing },
			{ upsert: true }
		);

	console.log(result.matchedCount);

	if (result.upsertedCount > 0) {
		console.log('One new document created with id ' + result.upsertedId);
	} else {
		console.log('Document was updated ' + result.modifiedCount);
	}
}

async function listDatabases(client) {
	const databasesList = await client.db().admin().listDatabases();

	console.log('Databases:');
	databasesList.databases.forEach((db) => {
		console.log(`- ${db.name}`);
	});
}
