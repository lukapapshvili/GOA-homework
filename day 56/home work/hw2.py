# 10 ელემენტიანი მთელი რიცხვების მასივის შევსება
array = []

# მომხმარებლისგან 10 რიცხვის შეყვანა
print("შეიყვანეთ 10 რიცხვი:")
for i in range(10):
    number = int(input(f"რიცხვი {i+1}: "))
    array.append(number)

# რიცხვების გამოკლებით გაორმაგება
doubled_array = [x * 2 for x in array]

# შედეგის გამოყვანა
print("გააორმაგებული რიცხვები:")
print(doubled_array)