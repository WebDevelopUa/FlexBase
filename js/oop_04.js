/*
    ООП в прототипном стиле - https://learn.javascript.ru/class-inheritance
    Class inheritance in JavaScript
 */

"use strict";

// --------- Parent class ------------

function Person(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getName = function () {
    return this.firstName + ' ' + this.lastName;
};

// --------- The child-class -----------

function Student(id, firstName, lastName) {
    Person.apply(this, arguments)
    // Person.call(this, id, firstName, lastName)
}

// inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.getName = function () {
    Person.prototype.getName.apply(this);
    return this.firstName + ' ' + this.lastName;
};

// calling the constructor function with the "new" keyword
var student = new Student(1, "Bob", "Getty");

console.log(student.id);
console.log(student.firstName);
console.log(student.getName());
console.log(student);
console.log('-----------------------');
console.log(student instanceof Student);
console.log(student instanceof Person);
console.log(Student.prototype.isPrototypeOf(student));
console.log(Person.prototype.isPrototypeOf(student));
