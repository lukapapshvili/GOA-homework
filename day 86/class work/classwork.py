# 2) https://www.codewars.com/kata/58fd96a59a9f65c2e900008d/train/python
def cyclic_string(s: str) -> int:
    length_ = len(s)
    for i in range(1, length_+1):
        if s in s[:i] * length_:
            return i
        