import { log } from 'console';

console.log('test');

let arr: string[] = ['two', 'to', 'bo'];

arr.push('4');

console.log(arr);

// union type

let newArr: (string | number)[] = [2, 4, 5, 'test'];

newArr.push('test');

let obj: { name: string; age: number; isAdmin: boolean } = {
	name: 'aki',
	age: 66,
	isAdmin: true,
};

obj = {
	name: 'cuni',
	age: 33,
	isAdmin: false,
};

log(obj.name);

interface Boy {
	name: string;
	age?: number;
}

const guy: Boy = {
	name: 'Sefik',
	// age: 22,
};

log(guy);

// Tuple

type stringAndNumber = [string, number];

let arrNew: stringAndNumber = ['34', 5];

console.log(arrNew[0], arrNew[1]);

// Enums
