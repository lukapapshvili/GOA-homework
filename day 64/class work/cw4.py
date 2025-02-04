def check_numbers(a, b):
    # პირველი რიცხვი 'a' უნდა იყოს კენტი
    is_a_odd = a % 2 != 0
    if not is_a_odd:
        print(f"{a} არ არის კენტი რიცხვი.")
        return False
    
    # მეორე რიცხვი 'b' უნდა იყოს ლუწი
    is_b_even = b % 2 == 0
    if not is_b_even:
        print(f"{b} არ არის ლუწი რიცხვი.")
        return False
    
    # პირველმა რიცხვმა უნდა იყოს მეტი მეორე რიცხვზე
    if a <= b:
        print(f"{a} არ არის მეტია {b}-ზე.")
        return False
    
    # თუ ყველა პირობა შესრულდა
    print(f"{a} არის კენტი და მეტია {b}-ზე, ხოლო {b} არის ლუწი.")
    return True
