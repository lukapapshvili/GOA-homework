# N - რიცხვების რაოდენობა
N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))

# მასივის შევსება
array = []
print(f"შეიყვანეთ {N} რიცხვი:")
for i in range(N):
    number = int(input(f"რიცხვი {i+1}: "))
    array.append(number)

# პირველ და ბოლო ელემენტთა ადგილების გაცვლა
if N > 1:
    array[0], array[-1] = array[-1], array[0]

# შედეგის გამოყვანა
print("მონაცემები, ადგილების გაცვლის შემდეგ:")
print(array)