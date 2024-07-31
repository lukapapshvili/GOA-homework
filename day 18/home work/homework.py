#1
list =[32,321,2,3,1,3,6]
list =list[4]
print(list)
#2
list =[32,321,2,3,1,3,6]
list =list[2]
print(list)
#3
nums=[1,2,3,4,5,6]
nums=nums[1::2]
print(nums)
#4

nums=[1,2,3,23,21,3213,3,]
nums.insert(1,'gg')
nums.insert(3,'dd')
nums.insert(5,'xd')
nums.insert(7,'pp')
nums.insert(9,'ww')
nums.insert(11,'kk')
print(nums)
#5
nums=[1,'ww',2,'bb',3,'xd',4,'zd',5,'gg',6,'dd',7]
nums.pop(1)
nums.pop(2)
nums.pop(3)
nums.pop(4)
nums.pop(5)
nums.pop(6)
nums_2=['ww','bb','xd','zd','gg','dd']
nums.extend(nums_2)
print(nums)