'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const ahmed = new Person('ahmed', 1988);
console.log(ahmed);
//1. New empty object is created
//2. Function is called, this keyword will be the new object
//3.new object is linked to prototype
//4.The object is auto returned from construction function
