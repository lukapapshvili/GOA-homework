// 1) შექმენით მანქანის, ცხოველის და მოსწავლის კონტრუქტორები და თითოეულით შექმენით სამ სამი ობიექტი
// მანქანის კონსტრუქტორი

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// ცხოველების კონსტრუქტორი
function Animal(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
}

// მოსწავლის კონსტრუქტორი
function Student(name, grade, school) {
    this.name = name;
    this.grade = grade;
    this.school = school;
}

// ვქმნით სამ მანქანის ობიექტს
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2019);
const car3 = new Car('Ford', 'Focus', 2018);

// ვქმნით სამ ცხოველის ობიექტს  
const animal1 = new Animal('Dog', 'Buddy', 3);
const animal2 = new Animal('Cat', 'Whiskers', 2);
const animal3 = new Animal('Bird', 'Tweety', 1);

// ვქმნით სამ მოსწავლის ობიექტს
const student1 = new Student('Alice', 'A', 'High School');
const student2 = new Student('Bob', 'B', 'Middle School');
const student3 = new Student('Charlie', 'C', 'Elementary School');