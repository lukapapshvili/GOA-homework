# 2) https://www.codewars.com/kata/58a6841442fd72aeb4000080
def cyclic_string(s: str) -> int:
    length_ = len(s)
    for i in range(1, length_+1):
        if s in s[:i] * length_:
            return i