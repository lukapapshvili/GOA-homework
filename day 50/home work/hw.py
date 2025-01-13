#    1
def matrix_sum(matrix1, matrix2):
    return [[matrix1[i][j] + matrix2[i][j] for j in range(len(matrix1[0]))] for i in range(len(matrix1))]
#    2
def swap_rows_and_columns(matrix):
    # რეგისტრირების ეტაპზე ახალი მატრიცის შექმნა
    new_matrix = [[0] * len(matrix) for _ in range(len(matrix[0]))]
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            new_matrix[j][i] = matrix[i][j]
    return new_matrix


#    3
def diagonal_sum(matrix):
    primary_diagonal_sum = sum(matrix[i][i] for i in range(len(matrix)))
    secondary_diagonal_sum = sum(matrix[i][len(matrix) - 1 - i] for i in range(len(matrix)))
    return primary_diagonal_sum, secondary_diagonal_sum