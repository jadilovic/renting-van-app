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

const gameState = Object.freeze({
	gameOver: 'done',
	gameStart: 'go',
	gameSpeed: 'run',
});

enum gameStateEnum {
	// gameOver = 'done',
	// gameStart = 'go',
	// gameSpeed = 'run',
	hello,
	what,
}

console.log(gameStateEnum);

console.log(gameState);

interface ApiResponse {
	message: string;
	date: Date;
	data: string;
}

interface ApiResponseObject {
	message: string;
	date: Date;
	data: {
		obj: {
			name: string;
			id: number;
		};
	};
}

const apiResponse: ApiResponse = {
	message: 'hello',
	date: new Date(),
	data: 'ok',
};

const apiResponse2: ApiResponseObject = {
	message: 'boy',
	date: new Date(),
	data: {
		obj: {
			name: 'aki',
			id: 22,
		},
	},
};
console.log(apiResponse);
console.log(apiResponse2);

// generics

interface ApiResponseGeneric<T> {
	message: string;
	date: Date;
	data: T;
}

const apiResponseGeneric: ApiResponseGeneric<string> = {
	message: 'hello',
	date: new Date(),
	data: 'ok',
};

const apiResponseGeneric2: ApiResponseGeneric<object> = {
	message: 'boy',
	date: new Date(),
	data: {
		obj: {
			name: 'aki',
			id: 22,
		},
	},
};

type Obj = {
	obj: {
		name: string;
		id: number;
		isActive: boolean;
	};
};

const apiResponseGeneric3: ApiResponseGeneric<Obj> = {
	message: 'boy',
	date: new Date(),
	data: {
		obj: {
			name: 'aki',
			id: 22,
			isActive: true,
		},
	},
};

const apiResponseGeneric4: ApiResponseGeneric<{
	height: number;
	width: number;
}> = {
	message: 'boy',
	date: new Date(),
	data: {
		height: 44,
		width: 22,
	},
};
console.log(apiResponseGeneric);
console.log(apiResponseGeneric2);
console.log(apiResponseGeneric3);
console.log(apiResponseGeneric4);
