from functools import reduce

# Creating a list of numbers
numbers = [6, 14, 5, 10, 20]

# Using reduce() to calculate the sum of all numbers
total_sum = reduce(lambda x, y: x + y, numbers)
total_sum
