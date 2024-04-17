requird_dailypushups = 20
requird_dailysquats = 50
user_dailypushups = int (input("enter your daily pushups: "))
user_dailysquats = int (input("enter your daily squats: "))
print(requird_dailypushups > user_dailypushups and requird_dailysquats > user_dailysquats)
print(requird_dailypushups < user_dailypushups and requird_dailysquats > user_dailysquats)
print(requird_dailypushups > user_dailypushups and requird_dailysquats < user_dailysquats)
print(requird_dailypushups < user_dailypushups and requird_dailysquats < user_dailysquats)
print(requird_dailypushups >= user_dailypushups and requird_dailysquats >= user_dailysquats)
print(requird_dailypushups <= user_dailypushups and requird_dailysquats >= user_dailysquats)
print(requird_dailypushups >= user_dailypushups and requird_dailysquats <= user_dailysquats)
print(requird_dailypushups <= user_dailypushups and requird_dailysquats <= user_dailysquats)