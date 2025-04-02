# 2) https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
def reverse_letter(s):
    return ''.join([i for i in s if i.isalpha()])[::-1]
# 3) https://www.codewars.com/kata/56684677dc75e3de2500002b 
def comfortable_word(word):
    one = []
    two = []
    for i, a in enumerate(word):
        if not i % 2:
            one.append(a)
        else:
            two.append(a)
    one = ''.join(one)
    two = ''.join(two)
    return LEFT.issuperset(one) and RIGHT.issuperset(two) or \
        LEFT.issuperset(two) and RIGHT.issuperset(one)