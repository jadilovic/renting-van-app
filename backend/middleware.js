const printName = (req, res, next) => {
	console.log('Jasmin');
	next();
};

const myAge = (req, res, next) => {
	console.log(44);
	next();
};

module.exports = { printName, myAge };
