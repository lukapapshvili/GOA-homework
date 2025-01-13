//   1
function printPositions(rows, cols) {
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            console.log(`row: ${row} col: ${col}`);
        }
    }
}

// მაგალითი: printPositions(2, 2);
//   2
function multiplicationTable() {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

// მაგალითი: console.log(multiplicationTable());
//   3
function printPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j > i) {
                console.log(`(${i}, ${j})`);
            }
        }
    }
}

// მაგალითი: printPairs(3);