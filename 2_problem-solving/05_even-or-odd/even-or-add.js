// 5. **Even or Odd Without `%`**  
//    Determine whether a number is even or odd.


// Using % operator
function evenOrOddModulus(num) {
  if (num % 2 === 0) {
    return "It's a even number.";
  } else {
    return "It's a odd number.";
  }
}

const findEvenOrOddModulus = evenOrOddModulus(4);
console.log(findEvenOrOddModulus);

// Using division and multiplication
function evenOrOdd(num) {
  if (Math.floor(num / 2) * 2 === num) {
   return "It's a even number.";
  } else {
   return "It's a odd number.";
  }
}

const findEvenOrOdd = evenOrOdd(5);
console.log(findEvenOrOdd);


// Using bitwise AND operator
function evenOrOddBitwise(num) {
  if ((num & 1) === 0) {
    return "It's a even number.";
  } else {
    return "It's a odd number.";
  }
}

const findEvenOrOddBitwise = evenOrOddBitwise(6);
console.log(findEvenOrOddBitwise);