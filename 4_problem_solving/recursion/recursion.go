package main

import "fmt"

// factorial
func factorial(n int) int {
	if n == 1 {
		return 1
	} else {
		return n * (n-1)
	}
}

// fibonacci
func fibonacci(n int) int {
	if n <=2 {
		return 1
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}


// binary search
func binarySearch(arr []int, target, left, right int) int {
	mid := (left + right) / 2

	if left > right {
		return -1
	} else if arr[mid] == target {
		return mid
	} else if arr[mid] > target {
		return binarySearch(arr, target, left, mid-1)
	} else {
		return binarySearch(arr, target, mid+1, right)
	}
}



func main(){
 fmt.Println("The factorial of 5 is", factorial(5))
 fmt.Println("The fibonacci of 10 is", fibonacci(10))

 arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
 fmt.Println("The binary search of 5 is", binarySearch(arr, 5, 0, len(arr)-1))

}