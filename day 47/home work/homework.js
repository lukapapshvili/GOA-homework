// 1. ეს არის კონვერტაციის ფუნქცია, რომელიც აბრუნებს წამების რაოდენობას.
function convertMinutesToSeconds(minutes) {
    return minutes * 60; // გარდაქმნის წუთებს წამებში
}

// 2. ეს არის ფუნქცია, რომელიც აბრუნებს პირველი ორი რიცხვის ჯამის ნამრავლს მესამე რიცხვზე.
function multiplySumByThirdNumber(a, b, c) {
    return (a + b) * c; // ჯამის ნამრავალი
}

// 3. ეს არის ფუნქცია, რომელიც აბრუნებს True თუ პირველი რიცხვი მეტია, False თუ არა (if statement-ის გარეშე).
const isFirstGreaterThanSecond = (a, b) => a > b; // ტოლია True თუ a > b

// 4. ეს არის ფუნქცია, რომელიც კონსოლში გამოაქვს "Element: " და გადაცემული ელემენტი.
function logElement(element) {
    console.log("Element: " + element); // კონსოლში ელემენტის გამოსახვა
}

// 5. ეს არის ფუნქცია, რომელიც ჩასვამს სტრინგს შესაბამის ელემენტში.
function setStringInElementById(id, str) {
    document.getElementById(id).innerText = str; // ჩასმა id-ელემენტში
}