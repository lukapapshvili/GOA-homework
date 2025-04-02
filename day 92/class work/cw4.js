function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// გამოყენება
const myArray = [1, 2, 3, 4, 5];
console.log(getRandomElement(myArray));
