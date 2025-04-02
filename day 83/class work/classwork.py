# 2) https://www.codewars.com/kata/58649884a1659ed6cb000072
def update_light(current):
    lights = {"green": "yellow", "yellow": "red", "red": "green"}
    return lights[current]
# 3) https://www.codewars.com/kata/568dcc3c7f12767a62000038
def set_alarm(employed, vacation):
    return True if employed and not vacation else False