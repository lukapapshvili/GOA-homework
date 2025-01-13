def remove_elements(list1, list2):
    # ლუპის გამოყენებით ვგრძნობთ ელემენტებს list1-დან, რომლებიც არიან list2-ში
    list1[:] = [item for item in list1 if item not in list2]

# მაგალითი
list1 = [1, 2, 3, 4, 5, 6]
list2 = [2, 4, 6]

remove_elements(list1, list2)
print(list1)  # შედეგი: [1, 3, 5]