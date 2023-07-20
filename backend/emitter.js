const EventEmitter = require('events');
const fs = require('fs');

const emitter = new EventEmitter();

emitter.on('hello', (data) => {
	console.log('Hello Greeting');
	console.log(data);
	fs.readFile('./file.txt', 'utf-8', (err, data) => {
		if (err) {
			console.log(err.message);
		}
		console.log(data);
	});
});

setTimeout(() => {
	emitter.emit('hello', [2, 3, 4]);
}, 2000);
