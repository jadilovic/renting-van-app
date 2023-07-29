const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbConnection;
let localUri = process.env.LOCAL_URI;
let mongoDbUri = process.env.MONGODB_URI;
module.exports = {
	connectToMongo: (cb) => {
		MongoClient.connect(mongoDbUri)
			.then((client) => {
				dbConnection = client.db('gamesDB');
				// dbConnection = client.db();
				return cb();
			})
			.catch((err) => {
				console.log('ERROR : ', err);
				return cb(err);
			});
	},
	getDB: () => dbConnection,
};
