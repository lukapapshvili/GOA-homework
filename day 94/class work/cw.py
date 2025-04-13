numbers = [12, 24, 30, 15, 36, 40, 48, 50, 60, 77]

# ვფილტრავთ ელემენტებს, რომლებიც უნაშთოდ იყოფა 12-ზე
divisible_by_12 = list(filter(lambda x: x % 12 == 0, numbers))

print(divisible_by_12)
