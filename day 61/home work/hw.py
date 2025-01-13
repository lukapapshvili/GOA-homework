def remove_elements(arr, *elements_to_remove):
    # ვქმნით ახალ სიას, სადაც შედის მხოლოდ ის ელემენტები, რომლებიც არ არის `elements_to_remove`-ში
    return [item for item in arr if item not in elements_to_remove]

# მაგალითი:
my_list = [1, 2, 3, 4, 5, 6, 7]
elements_to_remove = [2, 4, 6]

# დავრეკოთ ფუნქციას
filtered_list = remove_elements(my_list, *elements_to_remove)
print(filtered_list)  # შედეგი იქნება: [1, 3, 5, 7]