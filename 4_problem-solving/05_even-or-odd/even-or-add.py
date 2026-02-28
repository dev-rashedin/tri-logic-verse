#  5. **Even or Odd Without `%`**  
#    Determine whether a number is even or odd.


# Using Modulus operator

def evenOrOddModulus(num):
  if num % 2 == 0:
    return "It's a even number."
  else:
    return "It's a odd number."
  

print(evenOrOddModulus(5))