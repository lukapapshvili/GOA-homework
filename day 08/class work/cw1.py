#მომხმარებელს შემოატანინეთ ორი მნიშვნელობა პირველი პაროლი და მეორე განმეორებითი პაროლი შემოტანის შემდეგ ეს ორი ტექსტი ერთმანეთთან შეადარეთ უდრის თუ არა ერთმანეთს და დაბეჭდეთ ტერმნიალში მიღებული შედეგი
#შემოატანინეთ მომხმარებელს ერთი რიცხვი და შეამოწმეთ არის თუ არა ეგ რიცხვი მეტი 5-ზე ზე და ნაკლები ან ტოლი 10-ზე გამოიყენეთ and
#შემოატანინეთ მომხმარებელს რიცხვი და შეამოწმეთ არის თუ არა ეს რიცხვი მეტი 5-ზე ან მეტი 10-ზე
#გატესტეთ ყველა კომბინაცია and-ზეც და or-ზეც მაგ:true or false ,false or true
#1
password = input("Enter the password: ")

repeat_password = input("Repeat the password: ")

if password == repeat_password:
    print("Passwords match.")
else:
    print("Passwords do not match.")

#2
number = int(input("Enter a number: "))

if number > 5 and number <= 10:
    print("The number is greater than 5 and less than or equal to 10.")
else:
    print("The number is not in the range.")
    
    
    #3
    number = int(input("Enter another number: "))

    if number > 5 or number > 10:
        print("The number is greater than 5 or greater than 10.")
    else:
        print("The number is not greater than 5 or 10.")
    
    import builtins

#4
def test_passwords_match(monkeypatch):
    inputs = iter(["password123", "password123"])
    monkeypatch.setattr(builtins, 'input', lambda _: next(inputs))
    assert password == repeat_password

def test_passwords_do_not_match(monkeypatch):
    inputs = iter(["password123", "password321"])
    monkeypatch.setattr(builtins, 'input', lambda _: next(inputs))
    assert password != repeat_password

def test_number_in_range(monkeypatch):
    monkeypatch.setattr(builtins, 'input', lambda _: "7")
    assert 5 < number <= 10

def test_number_not_in_range(monkeypatch):
    monkeypatch.setattr(builtins, 'input', lambda _: "4")
    assert not (5 < number <= 10)

def test_number_greater_than_5_or_10(monkeypatch):
    monkeypatch.setattr(builtins, 'input', lambda _: "11")
    assert number > 5 or number > 10

def test_number_not_greater_than_5_or_10(monkeypatch):
    monkeypatch.setattr(builtins, 'input', lambda _: "3")
    assert not (number > 5 or number > 10)

def test_true_or_false():
    assert True or False

def test_false_or_true():
    assert False or True

def test_true_and_false():
    assert not (True and False)

def test_false_and_true():
    assert not (False and True)
