import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

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

	return pets;
}
