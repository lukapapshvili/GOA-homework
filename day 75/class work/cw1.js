// 1) შევქმნათ ბანკის კონტრუქტორი, თანხა და მფლობელი. სამი მეთოდი, ერთი თანხის შეტანა, მეორე თანხის გამოტანა, და მესამე თანხის ჩვენება ( მფლობელის სახელი: თანხა )
function Bank(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`${amount} deposited. New balance: ${this.balance}`);
    };

    this.withdraw = function(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        }
    };

    this.showBalance = function() {
        console.log(`${this.owner}: ${this.balance}`);
    };
}

const myBank = new Bank('Luka Papashvili', 1000);
myBank.deposit(500);
myBank.withdraw(200);
myBank.showBalance();

//2) შევქმნათ ცხოველის კონტრუკოქტორი სამი ფროფერთით და ერთი მეთოდით

function Animal(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;

    this.describe = function() {
        console.log(`${this.name} is a ${this.age} year old ${this.species}`);
    };
}

const myPet = new Animal('Buddy', 'dog', 3);
myPet.describe();