/*
     Написать класс Dog, который наследуется от класа Animal.
     Класс Animal имеет метод getName (name можно передать в конструктор).
     Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
         ООП в функциональном стиле
         Функциональное наследование
 */

"use strict";

// --------- Parent class ------------
function Animal(name) {
    this._name = name;

    this.getName = function () {
        return this._name;
    }
}

// --------- Inheritance -----------
// using "call(this, name)" or "apply(this, arguments)"

// --------- The child-class -----------
function Dog(name) {
    Animal.call(this, name);
    // Animal.apply(this, arguments);

    this.bark = function () {
        return "Dog " + this._name + " is barking";
    }
}


// --------- Creating new Object -----------
var animal = new Animal('Alien');
var dog = new Dog('Tuzik');

// --------- Output -----------
console.log(animal.getName());
console.log(dog.bark());
console.log(dog.getName());

console.log('-----------------------');

// --------- Test -----------
console.log(dog.getName() === 'Tuzik'); // true
console.log(dog.bark() === 'Dog Tuzik is barking'); // true

