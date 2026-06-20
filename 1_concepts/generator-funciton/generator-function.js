function* generator(i){
  yield i;
  yield i + 10;
}

const gen = generator(5);

// console.log(gen.next())

// console.log(gen.next())

//  Output: 
// { value: 5, done: false }
// { value: 15, done: false }

console.log(gen.next().value)

console.log(gen.next().value)


// Generator function do not have arrow function counterparts.

// function and * are separate tokens, so they can be separated by whitespace or line terminators.