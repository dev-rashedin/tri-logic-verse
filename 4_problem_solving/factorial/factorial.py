

def main():
  def factorial(n):
    if n == 0:
      return 1
    else:
      return n * factorial(n - 1)
  
  print(factorial(5))


if __name__ == "__main__":
 main()