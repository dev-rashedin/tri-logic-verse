package main

import "fmt"

// with else if
func findGrades(name string, score int){
 if score >= 90 {
	fmt.Printf("Hello %s, you've got an A. Very well done!\n", name)
 } else if score >= 80 {
	fmt.Printf("Hello %s, you've got a B. Well done!\n", name)
 } else if score >= 70 {	
	fmt.Printf("Hello %s, you've got a B. Well done!, but you can do better!\n", name)
}  else if score >= 60 {
	fmt.Printf("Hello %s, you've got a C+. Good job!, but you can do better!\n", name)
} else if score >= 50 {
	fmt.Printf("Hello %s,  you've got a C. You need to work harder!\n", name)
} else if score >= 40 {
	fmt.Printf("Hello %s, you've got a D. You need to work much harder!\n", name)
} else {
	fmt.Printf("Hello %s, you've got an E. you've got a D. You need to work much harder!\n", name)
}
 }

//  with switch
func findGrades2(name string, score int){

	switch {
	case score >= 90:
		fmt.Printf("Hello %s, you've got an A. Very well done!\n", name)
	case score >= 80:
		fmt.Printf("Hello %s, you've got a B+. Well done!\n", name)
	case score >= 70:
		fmt.Printf("Hello %s, you've got a B. Well done!, but you can do better!\n", name)
	case score >= 60:
		fmt.Printf("Hello %s, you've got a C+. Good job!, but you can do better!\n", name)
	case score >= 50:
		fmt.Printf("Hello %s,  you've got a C. You need to work harder!\n", name)
	case score >= 40:
		fmt.Printf("Hello %s, you've got a D. You need to work much harder!\n", name)
	default:
		fmt.Printf("Hello %s, you've got an E. you've got a D. You need to work much harder!\n", name)
	}
	
}


func main(){

	findGrades("John Snow", 70)
	findGrades2("Arya Start", 83)
}

