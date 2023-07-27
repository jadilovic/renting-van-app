const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
	connectToMongo: (cb) => {
		MongoClient.connect('mongodb://127.0.0.1:27017/dealership')
			// MongoClient.connect(
			// 	'mongodb+srv://adilovic79:V5jKr8hWGYRT1TkC@parts-app.6lakxck.mongodb.net/?retryWrites=true&w=majority'
			// )
			.then((client) => {
				// dbConnection = client.db('gamesDB');
				dbConnection = client.db();
				return cb();
			})
			.catch((err) => {
				console.log('ERROR : ', err);
				return cb(err);
			});
	},
	getDB: () => dbConnection,
};
