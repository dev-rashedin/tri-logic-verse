
function factorial(n) {
  if( n === 1) return 1 // base case

  return n * factorial(n - 1)
}

console.log(factorial(5))