// 5. **Even or Odd Without `%`**  
//    Determine whether a number is even or odd **without using the modulus operator**.

function evenOrOdd(num) {
  if ((num / 2) * 2 === num) {
   return "It's a even number.";
  } else {
   return "It's a odd number.";
  }
}


const findEvenOrOdd = evenOrOdd(5);
console.log(findEvenOrOdd);
