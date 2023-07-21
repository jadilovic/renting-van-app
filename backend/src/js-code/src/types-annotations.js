"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
console.log('test');
let arr = ['two', 'to', 'bo'];
arr.push('4');
console.log(arr);
// union type
let newArr = [2, 4, 5, 'test'];
newArr.push('test');
let obj = {
    name: 'aki',
    age: 66,
    isAdmin: true,
};
obj = {
    name: 'cuni',
    age: 33,
    isAdmin: false,
};
(0, console_1.log)(obj.name);
const guy = {
    name: 'Sefik',
    // age: 22,
};
(0, console_1.log)(guy);
let arrNew = ['34', 5];
console.log(arrNew[0], arrNew[1]);
// Enums
const gameState = Object.freeze({
    gameOver: 'done',
    gameStart: 'go',
    gameSpeed: 'run',
});
var gameStateEnum;
(function (gameStateEnum) {
    // gameOver = 'done',
    // gameStart = 'go',
    // gameSpeed = 'run',
    gameStateEnum[gameStateEnum["hello"] = 0] = "hello";
    gameStateEnum[gameStateEnum["what"] = 1] = "what";
})(gameStateEnum || (gameStateEnum = {}));
console.log(gameStateEnum);
console.log(gameState);
const apiResponse = {
    message: 'hello',
    date: new Date(),
    data: 'ok',
};
const apiResponse2 = {
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
const apiResponseGeneric = {
    message: 'hello',
    date: new Date(),
    data: 'ok',
};
const apiResponseGeneric2 = {
    message: 'boy',
    date: new Date(),
    data: {
        obj: {
            name: 'aki',
            id: 22,
        },
    },
};
const apiResponseGeneric3 = {
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
const apiResponseGeneric4 = {
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
