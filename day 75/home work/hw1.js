// დავალება: მანქანის კონსტრუქტორი
// შექმენით კონსტრუქტორი, რომელიც აღწერს მანქანის შემდეგ თვისებებს:

// მარკა (brand)
// მოდელი (model)
// გამოშვების წელი (year)
// ძრავის მოცულობა (engineVolume)
// და შექმენით მეთოდი, რომელიც აბრუნებს სტრიქონს მანქანის სრულ აღწერაზე (მაგ., "Toyota Prius, 2018, 1.8L").

function Car(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;
}

Car.prototype.getDescription = function() {
    return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
};

// Example usage:
const myCar = new Car('Toyota', 'Prius', 2018, 1.8);
console.log(myCar.getDescription()); // Output: Toyota Prius, 2018, 1.8L