# num1 = int (input("please enter the first number: "))
# num2 = int (input("please enter the second number: "))
# if num1 < num2:
#     print("num1 is smaller then num2")

# elif num1 > num2:
#     print("num1 is bigger then num2")

# elif num1 == num2:
#     print("num1 is equal to num2")





# secret_num = 7
# guess = int (input("please guess secret number"))
# if secret_num < guess:
#     print("the number that you guess is bigger then secret number")

# elif secret_num < guess:
#     print("again the number that you guess is bigger then secret number")

# elif secret_num < guess:
#     print("little hint the secret number is smaller then 10")

# elif secret_num > guess:
#     print("hint again the number is 6 to 9")

# elif secret_num == guess:
#     print("WOW VERY GOOD YOU GUESSED SECRET NUMBER YOU CAN GO ON NEXT LEVEL")




secret_num = 12
guess = int (input("guess secret number"))
while guess != secret_num:
    if secret_num < guess:
        print("the number is higer")

    if secret_num > guess:
        print("the number is lower")

print("WOW YOU GUESSD")