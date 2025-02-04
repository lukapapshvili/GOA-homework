// დავალება: წიგნის კონსტრუქტორი
// შექმენით კონსტრუქტორი, რომელიც აღწერს წიგნის შემდეგ თვისებებს:

// სათაური (title)
// ავტორი (author)
// გვერდების რაოდენობა (pages)
// გამოშვების წელი (year)
// და შექმენით მეთოდი, რომელიც აბრუნებს ინფორმაციას, თუ რამდენი გვერდი უნდა წაიკითხოს ადამიანმა ყოველდღიურად, თუ სურს წიგნი 7 დღეში დაასრულოს.

function Book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;

    this.pagesPerDay = function() {
        return this.pages / 7;
    };
}

// Example usage:
const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, 1925);
console.log(`You need to read ${myBook.pagesPerDay()} pages per day to finish the book in 7 days.`);