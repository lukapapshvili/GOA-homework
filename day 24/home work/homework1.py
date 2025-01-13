#1
def find_longest_word(words):
    if not words:  # Handle empty list
        return None
    
    longest_word = max(words, key=len)
    return longest_word

# Example usage:
words_list = ["apple", "banana", "cherry", "pineapple"]
print(find_longest_word(words_list))  # Output: "pineapple"

#2
def process_integers(nums):
    new_list = []
    for num in nums:
        if num % 2 == 0:
            new_list.append(num * num)  # Square the even number
        else:
            new_list.append(num * 2)  # Add 2 to the odd number
    
    return new_list

# Example usage:
integers_list = [1, 2, 3, 4, 5]
print(process_integers(integers_list))  # Output: [3, 4, 5, 16, 7]