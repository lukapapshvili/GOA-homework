// შექმენით ადამიანის, ცხოველის ან მანქანის ობიექტი რომელსაც ექნება 5 property, და გამოიტანეთ მისი ერთ-ერთი property კონსოლში.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Red',
    mileage: 15000
};

// გამოიტანს მანქანის მოდელი კონსოლში
console.log(car.model);

// შექმენით ობიექტი ორი key-value წტვილით ( 2 porpetry-თ ), პირველი key იქნება 'რიგი_0' მეორე key 'რიგი_1', პირველ value-ში შეინახეთ 5 ელემენტიანი მასივი ლუწი რიცხვების, მეორეში კენტი რიცხვების, გადაუყევით ორივე მასივს და გამოიტანეთ თითოეულის ელემენტი ერთდროულად, ( ცალ ცალკე არ გადაუყვეთ პირველს და მეორეს )

const numbers = {
    'რიგი_0': [2, 4, 6, 8, 10],
    'რიგი_1': [1, 3, 5, 7, 9]
};

for (let i = 0; i < numbers['რიგი_0'].length; i++) {
    console.log(numbers['რიგი_0'][i], numbers['რიგი_1'][i]);
}


// შექმენით ფუნქცია რომელიც არგუმენტად იღებს ობიექტს, ამ ობიექტიდან კითხულობს ორ value-ს ( quantity და element ) ( ეს key-ების სახლეებია ), შემდეგ დააბრუნებს მასივს შესაბამისად. ( ის ელემენტი რაც მოცემული იყო იმდენჯერ ჩასმული მასივში რამდენჯერაც quantity-ში იყო მოცემული )

function createArrayFromObject(obj) {
    const result = [];
    for (let i = 0; i < obj.quantity; i++) {
        result.push(obj.element);
    }
    return result;
}

// მაგალითის გამოყენება
const exampleObj = {
    quantity: 3,
    element: 'apple'
};

console.log(createArrayFromObject(exampleObj)); // ['apple', 'apple', 'apple']