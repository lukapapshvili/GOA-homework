# 1. https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python
def openOrSenior(data):
    return ["Senior" if person[0] >= 55 and person[1] > 7 else "Open" for person in data]
# 2. https://www.codewars.com/kata/557cffec8c3e8e55cc00010f/train/python
def zeros(n):
    count, i = 0, 5
    while n // i:
        count, i = count + n // i, i * 5
    return count
# 3. https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/python# 3. https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/python# 3. https://www.codewars.com/kata/586a1af1c66d18ad81000134/train/python
def driver(data):
      lic = ""
      # 1 to 5
      if len(data[2]) >= 5:
            lic += data[2][:5]
      else:
            lic += data[2]
            while (len(lic) < 5): lic += "9"
      
      # 6
      lic += (str(parse(data[3]).year))[2]

      # 7 to 8
      month = parse(data[3]).month
      if data[4] == "F": month += 50
      month = str(month)
      if len(month) == 1: month = "0" + month
      lic += month

      # 9 to 10
      day = str(parse(data[3]).day)
      if len(day) == 1: day = "0" + day
      lic += day

      # 11
      lic += (str(parse(data[3]).year))[3]

      # 12 to 13
      lic +=  data[0][:1]
      if (data[1]) != "": 
            lic += data[1][:1]
      else:
            lic += "9"

      # 14 to 16
      lic += "9AA" 

      return lic.upper()

print(driver(["John", "James", "Smith", "01-Jan-2000", "M"]))
print(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"]))
print(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"]))
# 4. https://www.codewars.com/kata/595519279be6c575b5000016/train/python
# function battle(x, y) {
#   const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
#   function power(char) {
#     var res = 0;
#     let arr = char.split('');
#     for (let i = 0; i <= arr.length; i++) {
#       if (abc.includes(arr[i])) {
#         res += abc.indexOf(arr[i]) + 1;
#       }
#     }
#     return res;
#   }
  

#   if (power(x) === power(y)) return 'Tie!';
#   return power(x) > power(y) ? x : y;
# }
# 5. https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
# function calculator(a,b,sign){
 
 
#  const calculator = (a,b,sign) => {
#    if(sign !== '+' && sign !== '-' && sign !== '/' && sign !== '*') {
#      return 'unknown value';
#    } else if(typeof a !== 'number' || typeof b !== 'number') {
#      return 'unknown value';
#    } else if(sign === '+') {
#      return a + b;
#    } else if(sign === '-') {
#      return a - b;
#    } else if(sign === '*') {
#      return a * b;
#    } else if(sign === '/') {
#      return a / b;
#    }
#  }