const greeting = (name: string): void => {
	console.log(`Hello ${name}`);
};

greeting('Aki');

const sum = (a: number, b: number): number => {
	return a + b;
};

// function signature
let pozz: (name: string) => void;
let calc: (a: number, b: number, c?: string) => number;

pozz = (name: string) => {
	console.log('Pozz ' + name);
};

calc = (a: number, b: number, c?: string) => {
	return a + b;
};

console.log(sum(4, 8));
pozz('Cuni');
console.log(calc(3, 5, 'test'));

// classes

class Customer {
	public name: string;
	readonly age: number;
	private isActive: boolean;

	constructor(name: string, age: number, isActive: boolean) {
		this.name = name;
		this.age = age;
		this.isActive = isActive;
	}

	format() {
		console.log(
			`Customer name is ${this.name} is old ${this.age} and is ${this.isActive}`
		);
	}
}

const person = new Customer('aki', 77, true);
const person2 = new Customer('novaki', 7, false);
const person3 = new Customer('cdfaki', 27, true);

person.name = 'Bob';

const persons: Customer[] = [person, person2, person3];

persons.forEach((person) => {
	person.format();
});
