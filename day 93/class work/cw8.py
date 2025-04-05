# Creating a list of numbers and filtering only the odd ones using filter() and lambda

numbers = [4, 9, 13, 22, 31, 40]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
odd_numbers
