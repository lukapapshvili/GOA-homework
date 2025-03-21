def manual_sort(arr):
    # ჩვენ ვატარებთ თითოეული ელემენტის შედარებას და გავატარებთ წინა ელემენტებთან შეზღუდულ ბერკეტში
    for i in range(1, len(arr)):
        key = arr[i]  # ვიღებთ თითოეული ელემენტის მნიშვნელობას
        j = i - 1
        # ვათვალიერებთ წინა ელემენტებს, და თუ მას დიდი ან ტოლია, გადავდივართ მასზე
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]  # ვასახებთ წინა ელემენტს შემდეგ პოზიციაში
            j -= 1
        # ამ დროს ჩამოვყალიბებთ ელემენტს მის სწორ პოზიციაზე
        arr[j + 1] = key
    return arr