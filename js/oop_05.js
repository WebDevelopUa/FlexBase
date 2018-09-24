/*
     Написать класс Dog, который наследуется от класа Animal.
     Класс Animal имеет метод getName (name можно передать в конструктор).
     Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
         ООП в прототипном стиле
         https://youtu.be/m7Bc3pLyij0
 */

"use strict";

// --------- Parent class ------------
function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function () {
    return this.name;
};

// --------- The child-class -----------
function Dog(name) {
    Animal.call(this, name);
    // Animal.apply(this, arguments);
}

// --------- Inheritance -----------
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// --------- Creating method after Inheritance -----------
Dog.prototype.bark = function (name) {
    Animal.prototype.getName.call(this, name);
    // Animal.prototype.getName.apply(this);
    return 'Dog ' + this.name + ' is barking';
};

// --------- Creating new Object -----------
var dog = new Dog('Tuzik');

// --------- Output -----------
console.log(dog.bark());
console.log(dog.getName());

console.log('-----------------------');

// --------- Test -----------
console.log(dog.getName() === 'Tuzik'); // true
console.log(dog.bark() === 'Dog Tuzik is barking'); // true

