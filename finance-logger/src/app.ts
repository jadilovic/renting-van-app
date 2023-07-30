import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { IsPerson } from './interfaces/IsPerson.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {
	Resource,
	ResourceColor,
	ResourceType,
} from './interfaces/Resource.js';
// const anchor = document.querySelector('a')!;

// const anchor = document.querySelector('a');
// console.log(anchor?.href);

const anchor = document.querySelector('a');
if (anchor) {
	console.log(anchor.href);
}

// const form = document.querySelector('form')!;

const pay = new Payment('Boby', 'plumbing', 100);
pay.amount = 23;

const inv1 = new Invoice('aki', 'beer', 7);
const inv2 = new Invoice('Cuni', 'keks', 5);
inv2.amount = 50;

const invArr: Invoice[] = [inv1, inv2, new Invoice('bob', 'kruh', 1)];

invArr.push(new Invoice('Adi', 'car', 4));

invArr.forEach((inv) => {
	inv.amount = 100;
	console.log(inv.amount, inv.client, inv.format());
});

console.log(invArr);

console.log(inv1, inv2);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const itemList = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(itemList);

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();
	let doc: HasFormatter;
	let values: [string, string, number] = [
		toFrom.value,
		details.value,
		amount.valueAsNumber,
	];
	if (type.value === 'invoice') {
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}
	// console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
	console.log(doc);
	list.render(doc, type.value, 'start');
});

console.log(pay);

const guy: IsPerson = {
	name: 'boby',
	isActive: true,
	amount: 99,
	getActive() {
		console.log(this.isActive);
	},
	getAmount() {
		return this.amount;
	},
};
guy.amount = 100;

console.log(guy.getAmount());

const greeting = (greet: IsPerson) => {
	console.log(greet.name);
};

greeting(guy);

let docOne: HasFormatter;
let docTwo;

docOne = new Invoice('Jasmin', 'programming', 30);
docTwo = new Payment('Sefik', 'electric', 50);

console.log(docOne);
console.log(docTwo);

const formatterArr: HasFormatter[] = [
	docOne,
	new Invoice('Bozi', 'cary', 33),
	docTwo,
];
console.log(formatterArr);

// generics
// const addUid = <T extends object>(obj: T) => {
const addUid = <T extends { name: string }>(obj: T) => {
	const uid = Math.floor(Math.random() * 100);
	return { ...obj, uid };
};

const docObj = addUid({ name: 'aki', age: 44 });
// const docObj1 = addUid('hello');

console.log(docObj.name);

const girl: Resource<object> = {
	color: ResourceColor.Blue,
	type: ResourceType.CAR,
	name: 'Ana',
	age: 22,
	uid: { years: 33 },
};

const animal: Resource<string> = {
	color: ResourceColor.Red,
	type: ResourceType.DOG,
	name: 'dog',
	age: 4,
	uid: '111',
};

const transport: Resource<string[]> = {
	color: ResourceColor.Yellow,
	type: ResourceType.PLANE,
	name: 'air',
	age: 12,
	uid: ['plane', 'balloon'],
};
console.log(girl, animal, transport);

let tup: [string, number, boolean] = ['aki', 33, false];

tup[0] = 'wout';

tup.push(4);

console.log(tup);
