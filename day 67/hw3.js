function generate2DArray(rows, cols) {
    let counter = 1;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(counter++);
        }
        result.push(row);
    }

    return result;
}

function printMatrixDetails(matrix) {
    const n = matrix.length;

    // Print rows
    console.log("Rows:");
    matrix.forEach(row => console.log(row));

    // Print columns
    console.log("Columns:");
    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        console.log(column);
    }

    // Print diagonals
    console.log("Diagonals:");
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
        antiDiagonal.push(matrix[i][n - 1 - i]);
    }
    console.log("Main diagonal:", mainDiagonal);
    console.log("Anti diagonal:", antiDiagonal);
}

function getUniqueElements(array) {
    const elementCounts = array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});

    return array.filter(item => elementCounts[item] === 1);
}

function trackUserInput() {
    const inputHistory = new Set();
    while (true) {
        const userInput = prompt("Enter text:");
        if (userInput === null || userInput.trim() === "") {
            alert("Input cannot be empty. Please try again.");
            continue;
        }
        if (inputHistory.has(userInput)) {
            alert("You have already entered this text: " + userInput);
        } else {
            inputHistory.add(userInput);
            alert("New input accepted: " + userInput);
        }
    }
}

function roundToNextPowerOfTen(num) {
    const length = num.toString().length;
    const powerOfTen = Math.pow(10, length - 1);
    return Math.ceil(num / powerOfTen) * powerOfTen;
}

function incrementToNextRoundedNumber() {
    const input = parseInt(prompt("Enter a number:"), 10);
    if (isNaN(input)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    const roundedNumber = roundToNextPowerOfTen(input);
    alert(`Rounded number: ${roundedNumber}`);
}

function promptForPassword() {
    const correctPassword = "12348765";
    while (true) {
        const userInput = prompt("Enter the password:");
        if (userInput === correctPassword) {
            alert("Correct password entered. Welcome!");
            break;
        } else {
            alert("Incorrect password. Please try again.");
        }
    }
}

// Example usage
const matrix = generate2DArray(3, 3);
console.log("Matrix:");
console.log(matrix);
printMatrixDetails(matrix);

const sampleArray = [1, 2, 2, 3, 4, 4, 5];
console.log("Unique elements:", getUniqueElements(sampleArray));

// Uncomment to test user input tracking
// trackUserInput();

// Uncomment to test rounding functionality
// incrementToNextRoundedNumber();

// Uncomment to test password functionality
// promptForPassword();
