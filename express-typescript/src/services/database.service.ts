// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import Game from '../models/games';

// Global Variables
export const collections: {
	games?: mongoDB.Collection;
	pets?: mongoDB.Collection;
} = {};

// Initialize Connection
export const connectToMongoDB = async () => {
	dotenv.config();

	const client: mongoDB.MongoClient = new mongoDB.MongoClient(
		process.env.DB_CONN_STRING || ''
	);

	await client.connect();

	const youTubeLessonsDb: mongoDB.Db = client.db('YouTubeLessons');

	const petsCollection: mongoDB.Collection =
		youTubeLessonsDb.collection('pets');

	const database: mongoDB.Db = client.db(process.env.DB_NAME);

	const gamesCollection: mongoDB.Collection = database.collection(
		process.env.GAMES_COLLECTION_NAME || ''
	);

	collections.games = gamesCollection;
	collections.pets = petsCollection;

	console.log(
		`Successfully connected to database: ${database.databaseName} and collection: ${gamesCollection.collectionName}`
	);
};
