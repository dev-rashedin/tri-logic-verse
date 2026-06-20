// 5. **Even or Odd Without `%`**
//    Determine whether a number is even or odd.

package main

import (
	"fmt"
	"math"
)

// With Modulus operator
func evenOrOddModulus(num int) string {
	if num % 2 == 0 {
		return "It's a even number."
	} else {
		return "It's a odd number."
	}
}

// With Multiplication and division
func evenOrOdd(num float64) string {
	if math.Floor(num / 2) * 2 == num {
		return "It's a even number."
	} else {
		return "It's a odd number."
	}
}


// With Bitwise AND operator
func evenOrOddBitwise(num int) string {
	if (num & 1) == 0 {
		return "It's a even number."
	} else {
		return "It's a odd number."
	}
}


func main() {
	fmt.Println(evenOrOddModulus(4))
	fmt.Println(evenOrOddModulus(5))

	fmt.Println(evenOrOdd(4))
	fmt.Println(evenOrOdd(5))

	fmt.Println(evenOrOddBitwise(4))
	fmt.Println(evenOrOddBitwise(5))
}




