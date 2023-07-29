const express = require('express');
const { connectToMongo, getDB } = require('./db');
const { ObjectId } = require('mongodb');

const app = express();

app.use(express.json());

let db;

connectToMongo((err) => {
	if (!err) {
		app.listen(3000, () => {
			console.log('Server is listening at port 3000');
		});
		db = getDB();
	}
});

app.get('/cars', (req, res) => {
	let cars = [];
	const page = req.query.page || 0;
	const itemsPerPage = 3;
	// db.collection('cars')
	db.collection('games')
		.find({})
		// .sort({ 'First Name': 1 })
		.skip(page * itemsPerPage)
		.limit(itemsPerPage)
		.forEach((car) => {
			cars.push(car);
		})
		.then(() => {
			console.log(cars);
			res.status(200).json(cars);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get('/cars/:id', (req, res) => {
	const id = req.params.id;

	if (ObjectId.isValid(id)) {
		db.collection('cars')
			.findOne({ _id: new ObjectId(id) })
			.then((car) => {
				console.log(car);
				res.status(200).json(car);
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ message: 'Could not fetch the item' });
			});
	} else {
		res.status(500).json({ message: 'Not valid id' });
	}
});

app.post('/cars', (req, res) => {
	const car = req.body;
	db.collection('cars')
		.insertOne(car)
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

app.delete('/cars/:id', (req, res) => {
	if (ObjectId.isValid(req.params)) {
		const id = req.params.id;

		db.collection('cars')
			.deleteOne({ _id: new ObjectId(id) })
			.then((result) => {
				res.status(200).json(result);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	} else {
		res.status(500).json({ message: 'Not valid id' });
	}
});

app.patch('/cars/:id', (req, res) => {
	if (ObjectId.isValid(req.params)) {
		const id = req.params.id;
		const updatedCars = req.body;
		db.collection('cars')
			.updateOne({ _id: new ObjectId(id) }, { $set: updatedCars })
			.then((result) => {
				res.status(200).json(result);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	} else {
		res.status(500).json({ message: 'Not valid id' });
	}
});
