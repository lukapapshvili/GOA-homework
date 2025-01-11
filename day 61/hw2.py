def bubble_sort(arr):
    n = len(arr)
    
    # გავაკეთებთ ნ დარტყმას, სადაც თითოეული ელემენტი დავაყენებთ მის სწორ ადგილზე
    for i in range(n):
        # ბოლო ელემენტი უკვე სორტირებულია, ამიტომ არ ვამოწმებთ მას
        for j in range(0, n-i-1):
            # თუ წინა ელემენტი უფრო დიდი არის, შევანაცვლებთ
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    
    return arr

# ტესტირება
my_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = bubble_sort(my_list)
print("სორტირებული სია:", sorted_list)