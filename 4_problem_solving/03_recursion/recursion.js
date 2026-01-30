// factorial
function factorial(n) {
  if( n === 1) return 1 // base case

  return n * factorial(n - 1)
}

// fibonacci
function fibonacci(n) {
  if (n <= 2) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// binary search
function binarySearch(arr, target, left, right) {
  let mid = Math.floor((left + right) / 2)

  if (left > right) {
    return -1
  } else if (arr[mid] === target) {
    return mid
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1)
  } else {
    return binarySearch(arr, target, mid + 1, right)
  }
}

console.log("The factorial of 5 is", factorial(5));
console.log("The fibonacci of 10 is", fibonacci(10))
console.log("The binary search of 5 in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is", binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 0, 9))