def matrix_row_lengths(matrix):
    """
    იღებს 2D მატრიცას და აბრუნებს 1D list-ს, რომელიც შეიცავს ყოველ სტრიქონში ელემენტების რაოდენობას.
    
    :param matrix: list[list[Any]] - 2D მატრიცა
    :return: list[int] - სტრიქონების სიგრძეების სია
    """
    return [len(row) for row in matrix]

# მაგალითი გამოყენება
matrix = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
]

print(matrix_row_lengths(matrix))  # [3, 2, 4]
