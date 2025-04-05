my_set = set()

# დამატება სხვადასხვა ტიპის მონაცემების
my_set.add(42)
my_set.add("hello")
my_set.add((1, 2))
my_set.add(3.14)
my_set.add(True)  # დამატება True
my_set.add(1)     # დამატება 1

# შემოწმება
print("Set-ის შიგთავსი:", my_set)
print("შეიცავს True?:", True in my_set)
print("შეიცავს 1?:", 1 in my_set)
print("Set-ის ზომა:", len(my_set))
