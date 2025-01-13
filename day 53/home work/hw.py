import math

def count_area(*args):
    if len(args) == 2:
        # მართკუთხედის ფართობი (2 რიცხვი)
        length, width = args
        return length * width
    
    elif len(args) == 1:
        # წრის ფართობი (1 რიცხვი)
        radius = args[0]
        return math.pi * (radius ** 2)
    
    elif len(args) == 3:
        # სამკუთხედის ფართობი (3 რიცხვი)
        a, b, c = args
        # ნახევარი პერიმეტრი
        s = (a + b + c) / 2
        # ჰერონის ფორმულა
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area
    
    else:
        raise ValueError("Invalid number of arguments. Expected 1, 2, or 3.")

# მაგალითები:

# მართკუთხედის ფართობი (2 რიცხვი)
print(count_area(5, 10))  # 50

# წრის ფართობი (1 რიცხვი)
print(count_area(7))  # 153.93804002589985

# სამკუთხედის ფართობი (3 რიცხვი)
print(count_area(3, 4, 5))  # 6.0