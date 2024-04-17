required_weight = 50
required_height = 170
user_weight = int (input("enter your weight: "))
user_height = int (input("enter your height: "))
print(required_weight > user_weight and required_height > user_height)
print(required_weight < user_weight and required_height > user_height)
print(required_weight > user_weight and required_height < user_height)
print(required_weight < user_weight and required_height < user_height)
print(required_weight <= user_weight and required_height <= user_height)
print(required_weight >= user_weight and required_height <= user_height)
print(required_weight <= user_weight and required_height >= user_height)
print(required_weight >= user_weight and required_height >= user_height)