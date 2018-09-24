/*
    ООП в функциональном стиле - https://learn.javascript.ru/oop
    Свойства, записанные в this, можно считать публичными.
    "use strict" mode is not allowed/forbidden:
        to use undeclared variables
        deleting a variable, object, function
        duplicating a parameter name
        octal numeric literals (var x = 010; )
        octal escape characters (var x = "\010")
        writing to a read-only property (writable:false)
        writing to a get-only property (get x())
        deleting an undeletable property (delete Object.prototype)
        the string "eval" cannot be used as a variable
        the string "arguments" cannot be used as a variable
        the with statement
        eval() is not allowed to create variables in the scope from which it was called
        in function calls like f(), the this value was the global object. In strict mode, it is now undefined
        default binding
 */

// Invoking a Function as a Method
"use strict"; //  supported by all modern browsers; makes it easier to write "secure" code

// function "getName" belongs to the object "person" (is the owner of the function)
var person = {
    id: 0,
    firstName: "First_Name",
    lastName: "Last_Name",

    getName: function () {
        return this.firstName + ' ' + this.lastName;
    },
    getId: function () {
        return this.id;
    },
    getAll: function () {
        return this;
    }
};

var student = {
    id: 10,
    firstName: "Tom",
    lastName: "Jones",
};

var mentor = {
    id: 1,
    firstName: "Bruce",
    lastName: "Lee"
};

console.log(
    person.getId(),
    person.getName(),
);
// With call(), an object can use a method belonging to another object.
console.log(
    person.getId.call(student),
    person.getName.call(student),
    person.getAll.call(student)
);
console.log(
    person.getId.apply(mentor),
    person.getName.apply(mentor),
);
