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
