 from random import randint
num={2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0}
#pro=roll/500
for i in range(500):
   roll=randint(1,6)+randint(1,6)
   num[roll] += 1
   
for item in num:
   pro = num[item]/500
   print pro   
