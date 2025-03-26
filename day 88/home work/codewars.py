# https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/python
def solution(string, ending):
    return string.endswith(ending)
# https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/python
def even_or_odd(s):
    e, o = sum(int(i) for i in s if int(i) % 2 == 0), sum(int(i) for i in s if int(i) % 2 != 0)
    return "Even and Odd are the same" if e == o else ("Odd is greater than Even", "Even is greater than Odd")[e > o]
# https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/python
def cat_mouse(x):
    if x.index("C") - x.index("m") > 4 or x.index("m") - x.index("C") > 4:
        return "Escaped!"
    else:
        return "Caught!"
# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python
def even_numbers(arr,n):
    res = []
    for i in range(len(arr)):
        if arr[i] % 2 == 0:
            res.append(arr[i])
    return res[-n:]