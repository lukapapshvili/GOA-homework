# 2) https://www.codewars.com/kata/59f061773e532d0c87000d16
def elevator_distance(array):
    return sum([abs(array[i] - array[i+1]) for i in range(len(array)-1)])