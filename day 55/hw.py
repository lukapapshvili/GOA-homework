# მომხმარებლისთვის ორი რიცხვის და ოპერაციის არჩევა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

operation = input("აირჩიეთ ოპერაცია (+ ან -): ")

# მართვის ნაწილი
if operation == "+":
    result = num1 + num2
    print(f"შედეგი: {num1} + {num2} = {result}")
elif operation == "-":
    result = num1 - num2
    print(f"შედეგი: {num1} - {num2} = {result}")
else:
    print("არასწორი ოპერაცია! შეგიძლიათ აირჩიოთ მხოლოდ + ან -.")




