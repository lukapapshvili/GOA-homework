// შექმენით ადამიანის კონტრუქტორი, და შექმენით მისგან სამი ობიექტი, თითოეულს უნდა ჰქონდეს: სახელი, ასაკი, სიმაღლე და ID
class Person {
    constructor(name, age, height, id) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.id = id;
    }
}

const person1 = new Person("luka", 30, 165, 1);
const person2 = new Person("lasha", 25, 175, 2);
const person3 = new Person("ioseb", 35, 180, 3);

console.log(person1);
console.log(person2);
console.log(person3);


function Car(name, year, engine, horsepower, color, owner) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
    this.owner = owner;
}

const car4 = new Car("Toyota", 2020, "V6", 300, "Red", "toyota owner akio toyoda"); //director of toyota company is akio toyoda
const car5 = new Car("BMW", 2018, "V8", 400, "Black", "bmw owner stefan quandt"); //owner of bmw company is stefan quandt
const car6 = new Car("Mercedes", 2021, "V12", 500, "White", "mercedes owner dieter zetsche"); //owner of mercedes company is dieter zetsche

console.log(car4);
console.log(car5);
console.log(car6);