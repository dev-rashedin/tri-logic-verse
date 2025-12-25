

def main():
  # factorial
  def factorial(n):
    if n == 0:
      return 1
    else:
      return n * factorial(n - 1)
  
  # fibonacci 
  def fibonacci(n):
    if n <= 2:
      return 1
    else:
      return fibonacci(n - 1) + fibonacci(n - 2)
    
  # binary search
  def binarySearch(arr, target, left, right):
    mid = (left + right) // 2

    if left > right:
      return -1
    elif arr[mid] == target:
      return mid
    elif arr[mid] > target:
      return binarySearch(arr, target, left, mid - 1)
    else:
      return binarySearch(arr, target, mid + 1, right)
    
  
  print(f"The factorial of 5 is {factorial(5)}")
  print(f"The fibonacci of 10 is {fibonacci(10)}")

  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  print(f"The binary search of 5 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is {binarySearch(arr, 5, 0, len(arr) - 1)}")


if __name__ == "__main__":
 main()