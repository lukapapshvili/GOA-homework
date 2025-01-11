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

// Example usage
const matrix = generate2DArray(3, 3);
console.log("Matrix:");
console.log(matrix);
printMatrixDetails(matrix);