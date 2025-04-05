
# Creating a list of numbers and applying filter and lambda to get even numbers

numbers = [5, 12, 18, 7, 25]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
even_numbers
