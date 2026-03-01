// 5. **Even or Odd Without `%`**  
//    Determine whether a number is even or odd.


package main;

import "fmt"

// With Modulus operator
func evenOrOddModulus(num int) string {
	if num % 2 == 0 {
		return "It's a even number."
	} else {
		return "It's a odd number."
	}
}


func main() {
	fmt.Println(evenOrOddModulus(4))
	fmt.Println(evenOrOddModulus(5))
}