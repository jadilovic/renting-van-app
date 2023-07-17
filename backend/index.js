const express = require('express');
const fs = require('fs');
const { printName, myAge } = require('./middleware');

const app = express();

app.use(printName, myAge);

app.get('/', (req, res) => {
	fs.readFile('file.txt', 'utf-8', (error, data) => {
		if (error) {
			throw Error;
		}
		console.log('data : ', data);
	});
	res.send('hello express god');
});

app.get('/api', (req, res) => {
	const users = ['aki', 'cuni', 'ali', 'adian'];
	res.json(users);
});

app.listen(5000, () => {
	console.log('Server is listening at port 5000');
});

console.log('test');
