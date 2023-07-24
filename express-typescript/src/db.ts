import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

// require('dotenv').config();

// mongodb.connect(
// 	process.env.MONGODB_URI,
// 	{ useUnifiedTopology: true },
// 	async (err, client) => {
// 		const db = client.db();
// 		const results = await db.collection('pets').find().toArray();
// 		console.log(results);
// 		client.close();
// 	}
// );

export async function connectToDatabase() {
	dotenv.config();

	const client: mongoDB.MongoClient = new mongoDB.MongoClient(
		process.env.MONGODB_URI || ''
	);

	await client.connect();

	const db: mongoDB.Db = client.db('YouTubeLessons');

	const petsCollection: mongoDB.Collection = db.collection('pets');

	const pets = await petsCollection.find().toArray();

	console.log(pets);

	console.log(
		`Successfully connected to database: ${db.databaseName} and collection: ${petsCollection.collectionName}`
	);
}
