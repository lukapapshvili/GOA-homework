// შექმენით ფუნქცია რომელიც იღებს მატრიცას, და აბრუნებს ერთი დ მასივს რომელშიც შედის გადმოცემული მატრიც ელემენტის სიგრძეები (თანმიმდევრობით)
function getRowLengths(matrix) {
    return matrix.map(row => row.length);
}

// მაგალითი
const matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

console.log(getRowLengths(matrix)); // [3, 2, 4]

// შექმენით ფუნქცია რომელიც იღებს მატრიცას, და აბრუნებს ერთი დ მასივს რომელშიც შედის გადმოცემული მატრიც ელემენტის სიგრძეები (თანმიმდევრობით)
function getColumnLengths(matrix) {
    if (matrix.length === 0) return [];
    const columnLengths = new Array(matrix[0].length).fill(0);
    matrix.forEach(row => {
        row.forEach((_, colIndex) => {
            columnLengths[colIndex]++;
        });
    });
    return columnLengths;
}

// მაგალითი
console.log(getColumnLengths(matrix)); // [3, 2, 3, 1]