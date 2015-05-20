from gipigo import *
import time
import math

set_speed(100)
#right () 
#enc_tgt(0,1,14)
#enc_(1,1, floor (1219.2))
#time.sleep(.1)
#fwd()  
#time.sleep(3)

def move_forward(feet):
  mm = 304.8 * feet
  steps = mm/11.34
  enc_tgt(1,1,steps)
  time.sleep(.1)
  fwd()
  time.sleep(feet*2)

def turn_left():
  enc_tgt(0,1,14)
left()
enc_tgt(0,1,15)
time.sleep(.1)
fwd()
enc_(1,1, floor (1219.2))
time.sleep(3)
