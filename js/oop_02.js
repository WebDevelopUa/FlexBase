/*
    ООП в функциональном стиле - https://learn.javascript.ru/oop
    https://learn.javascript.ru/getters-setters
    https://www.w3schools.com/js/js_object_accessors.asp
    https://www.w3schools.com/js/js_function_call.asp
    https://youtu.be/OkPa-d4urTA
 */

"use strict";

// Invoking a Function with a Function Constructor

// adding a property to a constructor function
function Person(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;

    this.name = function () {
        return this.firstName + ' ' + this.lastName
    };

    this.changeName = function (changedFirstName, changedLastName) {
         this.firstName = changedFirstName;
         this.lastName = changedLastName;
    }
}

// calling the constructor function with the "new" keyword
var student = new Person(1, "First_Name", "Last_Name");

console.log(student.id);
console.log(student.firstName);


// changing student name
student.changeName("Dick", "Tracy");
console.log(student.name());

console.log('----------------------');

// adding a property to an object "student"
student.age = 20;
console.log(student);


