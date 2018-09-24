/*
     Написать класс Dog, который наследуется от класа Animal.
     Класс Animal имеет метод getName (name можно передать в конструктор).
     Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
         ООП в прототипном стиле ECMAScript 6 - ECMAScript 2015
         https://youtu.be/m7Bc3pLyij0
 */

"use strict";

// --------- Parent class ------------
class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

}

// --------- Inheritance -----------
// using "extends"

// --------- The child-class -----------
class Dog extends Animal {

    // String Substitution using the ${ } syntax - https://developers.google.com/web/updates/2015/01/ES6-Template-Strings
    bark() {
        return `Dog ${this.name} is barking`;
    }
}


// --------- Creating new Object -----------
var dog = new Dog('Tuzik');

// --------- Output -----------
console.log(dog.bark());
console.log(dog.getName());

console.log('-----------------------');

// --------- Test -----------
console.log(dog.getName() === 'Tuzik'); // true
console.log(dog.bark() === 'Dog Tuzik is barking'); // true

