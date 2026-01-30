let arr = [3, 7, 2, 9];
let max = arr[0];

// // solution with for loop
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

// // solution with for...of
for (let num of arr) {
  if (num > max) {
    max = num;
  }
}

// solution with math.max()
max = Math.max(...arr)

// solution with reduce()
max = arr.reduce((a, b) => Math.max(a, b));

// solution with sort()
arr.sort((a, b) => b - a);
max = arr[0];


console.log(max);
