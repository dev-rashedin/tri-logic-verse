#  5. **Even or Odd Without `%`**  
#    Determine whether a number is even or odd.

import math


# Using Modulus operator

def evenOrOddModulus(num):
  if num % 2 == 0:
    return "It's a even number."
  else:
    return "It's a odd number."
  

print(evenOrOddModulus(6))


# Using Multiplication and division

def evenOrOdd(num):
  if math.floor(num / 2) * 2 == num:
    return "It's a even number."
  else:
    return "It's a odd number."
  

print(evenOrOdd(7))


# Using Bitwise AND operator
def evenOrOddBitwise(num):
  if (num & 1) == 0:
    return "It's a even number."
  else:
    return "It's a odd number."
  

print(evenOrOddBitwise(8))