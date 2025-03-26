# მომხმარებლისგან სტრინგისა და ინდექსების შეყვანა
user_string = input("შეიყვანეთ სტრინგი: ")
start_index = int(input("შეიყვანეთ დასაწყისი ინდექსი: "))
end_index = int(input("შეიყვანეთ ბოლო ინდექსი: "))

# ამოჭრა slicing-ის გამოყენებით
sliced_string = user_string[start_index:end_index]

# შედეგის გამოტანა
print("ამოჭრილი სტრინგი:", sliced_string)
