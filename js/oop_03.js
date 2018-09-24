/*
    ООП в прототипном стиле - https://learn.javascript.ru/prototypes

 */

"use strict";

// Invoking a Function with a Function Constructor

function Person(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;


}

// adding a property to a constructor function
Person.prototype.nationality = "UK";

// add new methods to objects constructors
Person.prototype.name = function () {
    return this.firstName + ' ' + this.lastName
};

Person.prototype.changeName = function (changedFirstName, changedLastName) {
    this.firstName = changedFirstName;
    this.lastName = changedLastName;
};
// calling the constructor function with the "new" keyword
var student = new Person(1, "First_Name", "Last_Name");

console.log(student.id);
console.log(student.firstName);
console.log(student.nationality);


// changing student name
student.changeName("Dick", "Tracy");
console.log(student.name());

console.log('----------------------');

// adding a property to an object "student"
student.age = 20;
console.log(student);


