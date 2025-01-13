def row_sums_and_averages(matrix):
    row_sums = []
    row_averages = []
    
    for row in matrix:
        row_sum = sum(row)
        row_sums.append(row_sum)
        row_averages.append(row_sum / len(row))
    
    return row_sums, row_averages

# მაგალითად
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

