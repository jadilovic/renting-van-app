let greeting = () => {
	console.log('Hellow World');
};

greeting();

let hello: Function;

hello = () => {
	console.log('working function');
};

const add = (a: number, b: number, c: number | string = 10): void => {
	console.log(a + b);
};

add(4, 6);

const minus = (a: number, b: number): number => {
	return a - b;
};

const result = minus(45, 4);

type stringOrNumber = string | number;
type personObject = { size: number; height: string | number };

const person = (name: string, age: stringOrNumber) => {
	console.log(`Hello ${name} and ${age}`);
};

const people = (name: personObject) => {
	console.log(`There is ${name.size} and big ${name.height}`);
};

person('Aki', 55);
person('Bob', '45');
people({ size: 4, height: 5 });

let swimm: (a: string, b: string) => void;

swimm = (name: string, age: string) => {
	console.log('Test ', name + ' and ' + age);
};

swimm('Aki', '337');

let fly: (c: string, d: number) => string;

fly = (name: string, age: number) => {
	return 'age and number';
};

console.log(fly('Aki', 22));

// second function signature

let calc: (a: number, b: number, c?: string) => number;

calc = (num1: number, num2: number, operation: string = 'add') => {
	if (operation === 'add') {
		return num1 + num2;
	} else {
		return num1 - num2;
	}
};

console.log(calc(4, 5));

const calc2 = (num1: number, num2: number, operation: string = 'subtract') => {
	return operation;
};

console.log(calc2(4, 6, 'add'));

// example of function signature

type personObj = { name: string; age: number };

let logDetails: (obj: personObj) => void;

logDetails = (ninja: personObj) => {
	console.log(`${ninja.name} and old : ${ninja.age}`);
};

logDetails({ name: 'Aki', age: 44 });
