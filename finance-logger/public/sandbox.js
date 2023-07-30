"use strict";
let greeting = () => {
    console.log('Hellow World');
};
greeting();
let hello;
hello = () => {
    console.log('working function');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(4, 6);
const minus = (a, b) => {
    return a - b;
};
const result = minus(45, 4);
const person = (name, age) => {
    console.log(`Hello ${name} and ${age}`);
};
const people = (name) => {
    console.log(`There is ${name.size} and big ${name.height}`);
};
person('Aki', 55);
person('Bob', '45');
people({ size: 4, height: 5 });
let swimm;
swimm = (name, age) => {
    console.log('Test ', name + ' and ' + age);
};
swimm('Aki', '337');
let fly;
fly = (name, age) => {
    return 'age and number';
};
console.log(fly('Aki', 22));
// second function signature
let calc;
calc = (num1, num2, operation = 'add') => {
    if (operation === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
console.log(calc(4, 5));
const calc2 = (num1, num2, operation = 'subtract') => {
    return operation;
};
console.log(calc2(4, 6, 'add'));
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} and old : ${ninja.age}`);
};
logDetails({ name: 'Aki', age: 44 });
