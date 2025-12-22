package main

import "fmt"
import "sort"

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	largest := nums[0]

	for _, num := range nums {
		if num > largest {
			largest = num
		}
	}
	fmt.Println(largest)
	}


// using sort

func findLargestNumber(nums []int) int {
	sort.Ints(nums)
	return nums[len(nums)-1]
}
