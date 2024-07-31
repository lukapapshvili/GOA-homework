#1
def add(num1,num2,operation):
    result=0
    if num1 or num2=='2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100' :
        result=num1 - num2
    else:
        result='not even number'
    return result    
    
print(add(4,4,'+'))
#2
def reverse_string(s):
    reversed_str = ''
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str
print(reverse_string)
#3
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
print(factorial)    
#4
def common_elements(list1, list2):
    common = []
    for element in list1:
        if element in list2 and element not in common:
            common.append(element)
    return common
print(common_elements)
#5
def count_vowels(s):
    vowels = 'aeiouAEIOU'
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count
print(count_vowels)
#6
def bubble_sort(lst):
    n = len(lst)
    for i in range(n):
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    return lst
print(bubble_sort)
#7
def are_permutations(str1, str2):
    if len(str1) != len(str2):
        return False
    
    # Create frequency count dictionaries
    char_count1 = {}
    char_count2 = {}
    
    for char in str1:
        char_count1[char] = char_count1.get(char, 0) + 1
    
    for char in str2:
        char_count2[char] = char_count2.get(char, 0) + 1
    
    return char_count1 == char_count2
print(are_permutations)
#8
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True
print(is_prime)
#9
def sort_by_length(lst):
    def length_key(s):
        return len(s)
    
    for i in range(len(lst)):
        for j in range(0, len(lst) - i - 1):
            if length_key(lst[j]) > length_key(lst[j + 1]):
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
    
    return lst
print(sort_by_length)



def homework(list):
    intejer_nums = []
    for num in list:
        if num == int(num):
            intejer_nums.append(num)
            intejer_nums
        list[1,2,3,4,5,6,7,8,9,10]
        print(homework(list))