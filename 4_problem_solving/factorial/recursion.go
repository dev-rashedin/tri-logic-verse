package main

import "fmt"


func factorial(n int) int {
	if n == 1 {
		return 1
	} else {
		return n * (n-1)
	}
}




func main(){
 fmt.Println(factorial(5))
}