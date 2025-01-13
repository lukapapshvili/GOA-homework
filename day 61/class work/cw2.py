def remove_elements(arr1, arr2):
    # მეორე მასივში არსებული ელემენტები გადაყავთ set-ში, რათა დავაჩქაროთ შედარება
    set_arr2 = set(arr2)
    
    # პირველი მასივიდან ვამოწმებთ, რომ არ იყოს ელემენტები, რომლებიც მეორეში არიან
    result = [element for element in arr1 if element not in set_arr2]
    
    return result

# მაგალითი
arr1 = [1, 2, 3, 4, 5]
arr2 = [2, 4]

# შედეგი: [1, 3, 5]
print(remove_elements(arr1, arr2))

# შედეგი: გამოაკლდა 2,4