const text = 'Hello World Luigi';

console.log(text);

const inputs = document.querySelectorAll('input');

console.log(inputs[0].value);

inputs.forEach((input) => {
	console.log(input);
});

const circ = (diameter: number): string => {
	return (diameter * Math.PI).toString();
};

console.log(circ(5));

let names: (string | number | boolean)[] = [
	4,
	'test',
	'wout',
	5,
	'hello',
	true,
];
names.push(5);
names.push('shwn');

let obj = {
	name: 'aki',
	age: 3,
};

obj.name = 'test';

let mix: number[] = [];

mix = [45];

let numStr: string | number = 8;
numStr = 'bob';

let ninja: {
	name: string;
	age: number;
} = { name: 'aki', age: 44 };

console.log(ninja);

ninja = { name: 'cuni', age: 33 };

console.log(ninja);

let age: any = 56;
age = 'cuni';
age = { name: 'best' };

console.log(age);

let mixArr: any[] = [];
mixArr.push(3);
mixArr.push({ name: 'mix' });
console.log(mixArr);

let ninObj: { name: any; age: any };

ninObj = { name: 3, age: 'bob' };

console.log(ninObj);
