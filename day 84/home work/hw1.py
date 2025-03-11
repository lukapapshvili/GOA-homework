# https://www.codewars.com/kata/58ca658cc0d6401f2700045f
# https://www.codewars.com/kata/576bb71bbbcf0951d5000044
# https://www.codewars.com/kata/5786f8404c4709148f0006bf
# https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

# 1)
def find_multiples(integer, limit):
    return list(range(integer, limit+1, integer))

# 2) 
def count_positives_sum_negatives(arr):
    return [len([i for i in arr if i > 0]), sum([i for i in arr if i < 0])] if len(arr) != 0 else []

# 3)
def starting_mark(height):
    return round(9.45 + (10.67 - 9.45) / (1.83 - 1.52) * (height - 1.52), 2)

# 4)
def same_case(a, b):
    if not a.isalpha() or not b.isalpha():
        return -1
    if a.isupper() and b.isupper() or not a.isupper() and not b.isupper():
        return 1
    if (a.isupper() and not b.isupper()) or (not a.isupper() and b.isupper()):
        return 0
    
# 5)
