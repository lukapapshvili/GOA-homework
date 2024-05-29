evennumbers = []
oddnumbers = []

for  i in range (1, 11, 2):
 if i % 2==0:
  evennumbers.append(i)

  for i in range (0 , 11, 2):
   if i % 2==0:
    oddnumbers.append(i)

#print(evennumbers)
#print(oddnumbers)
# sum = 0
# for i in range (20 + 1):
#     sum = sum + i
#     print(sum)