"use strict";
var greeting = function () {
    console.log('Hellow World');
};
greeting();
var hello;
hello = function () {
    console.log('working function');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
};
add(4, 6);
var minus = function (a, b) {
    return a - b;
};
var result = minus(45, 4);
var person = function (name, age) {
    console.log("Hello ".concat(name, " and ").concat(age));
};
var people = function (name) {
    console.log("There is ".concat(name.size, " and big ").concat(name.height));
};
person('Aki', 55);
person('Bob', '45');
people({ size: 4, height: 5 });
var swimm;
swimm = function (name, age) {
    console.log('Test ', name + ' and ' + age);
};
swimm('Aki', '337');
var fly;
fly = function (name, age) {
    return 'age and number';
};
console.log(fly('Aki', 22));
