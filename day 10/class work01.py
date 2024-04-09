evennumbers = []
oddnumbers = []

for  i in range (1, 11, 2):
 if i % 2==0:
  evennumbers.append(i)

  for i in range (0 , 11, 2):
   if i % 2==0:
    oddnumbers.append(i)

print(evennumbers)
print(oddnumbers)