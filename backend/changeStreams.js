const { MongoClient } = require('mongodb');
require('dotenv').config();

async function main() {
	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri);

	try {
		await client.connect();
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log('Error: ' + error.message);
	} finally {
		await client.close();
	}
}

main().catch((error) => console.log(error.message));
