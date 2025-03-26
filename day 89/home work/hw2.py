# მომხმარებლისგან წინადადების შეყვანა
sentence = input("შეიყვანეთ წინადადება: ")

# სიტყვების დაშლა და შემოტრიალება
reversed_words = [word[::-1] for word in sentence.split()]

# შედეგის გაერთიანება და გამოტანა
result = " ".join(reversed_words)
print("შედეგი:", result)
