# N - რიცხვების რაოდენობა
N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))

# მასივის შევსება
array = []
print(f"შეიყვანეთ {N} რიცხვი:")
for i in range(N):
    number = int(input(f"რიცხვი {i+1}: "))
    array.append(number)

# შებრუნებული მასივის გამოყვანა
reversed_array = array[::-1]

# შედეგის გამოყვანა
print("შებრუნებული თანმიმდევრობით:")
print(reversed_array)