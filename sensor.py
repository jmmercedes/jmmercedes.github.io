from gopigo import*

def turn_right():
  enc_tgt(1,0,15)
  time.sleep(.1)
  right()
  time.sleep(2)

def turn_left():
  enc_tgt(0,1,15)
  time.sleep(.1)
  left()
  time.sleep(2)
  
while 1<2:
  if us_dist(15)<50: 
    turn_left()
  else:
    fwd()
