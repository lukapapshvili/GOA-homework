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

// Example usage
console.log(generate2DArray(2, 2)); // Output: [[1, 2], [3, 4]]
