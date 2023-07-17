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
		// 	name: 'Bihac App',
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
		await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
			minimumNumberOfBedrooms: 4,
			minimumNumberOfBathrooms: 2,
			maximumNumberOfResults: 5,
		});
	} catch (error) {
		console.log(error);
	} finally {
		client.close();
	}
}

main().catch((error) => console.log(error));

async function createListing(client, newListing) {
	const result = await client
		.db('sample_airbnb')
		.collection('listingsAndReviews')
		.insertOne(newListing);

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

async function listDatabases(client) {
	const databasesList = await client.db().admin().listDatabases();

	console.log('Databases:');
	databasesList.databases.forEach((db) => {
		console.log(`- ${db.name}`);
	});
}
