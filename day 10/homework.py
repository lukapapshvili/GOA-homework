# #homework number 1
# for i in range (20):
#     if i % 2 == 0:
#         print(i)


# #homework number 2
# sum = 0
# for i in range (50, 100 + 1):
#     sum = sum + i
# print(sum)


# #homework number 3
# for i in range (-10, 10 + 1, 3):
#     print(i)


# #homework number 4
# num1 = int (input ("please enter the number: "))
# num2 = int (input ("please enter The number: "))
# if num1 > num2:
#     big = num1
#     small = num2
# else:
#     small = num1
#     big = num2
# for i in range (small,big, 2):
#     print(i)


#homework number 5
num1 = int(input("please enter the first number: "))
num2 = int(input("please enter the second number: "))
sum = 0
if num1 > num2:
    big = num1
    small = num2
else:
    samll = num1
    big = num2
for i in range (small,big):
    sum = sum + i
print(sum)