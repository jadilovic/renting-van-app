"use strict";
const greeting = (name) => {
    console.log(`Hello ${name}`);
};
greeting('Aki');
const sum = (a, b) => {
    return a + b;
};
// function signature
let pozz;
let calc;
pozz = (name) => {
    console.log('Pozz ' + name);
};
calc = (a, b, c) => {
    return a + b;
};
console.log(sum(4, 8));
pozz('Cuni');
console.log(calc(3, 5, 'test'));
// classes
class Customer {
    constructor(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    format() {
        console.log(`Customer name is ${this.name} is old ${this.age} and is ${this.isActive}`);
    }
}
const person = new Customer('aki', 77, true);
const person2 = new Customer('novaki', 7, false);
const person3 = new Customer('cdfaki', 27, true);
person.name = 'Bob';
const persons = [person, person2, person3];
persons.forEach((person) => {
    person.format();
});
