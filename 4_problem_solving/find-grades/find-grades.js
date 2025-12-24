function findGrade(name, score) {
  if (score >= 90) {
    console.log(`Hello ${name}, you've got an A. Very well done!`);
  } else if (score >= 80) {
    console.log(`Hello ${name}, you've got a B+. Well done!`);
  } else if (score >= 70) {
    console.log(
      `Hello ${name}, you've got a B. Well done!, but you can do better!`
    );
  } else if (score >= 60) {
    console.log(
      `Hello ${name}, you've got a C+. Good job!, but you can do better!`
    );
  } else if (score >= 50) {
    console.log(`Hello ${name}, you've got a C. You need to work harder!`);
  } else if (score >= 40) {
    console.log(`Hello ${name}, you've got a D. You need to work much harder!`);
  } else {
    console.log(`Hello ${name}, you've got a D. You need to work much harder!`);
  }
}

findGrade('John Snow', 82);

function findGrade2(name, score) {
  switch (true) {
    case score >= 90:
      console.log(`Hello ${name}, you've got an A. Very well done!`);
      break;
    case score >= 80:
      console.log(`Hello ${name}, you've got a B+. Well done!`);
      break;
    case score >= 70:
      console.log(
        `Hello ${name}, you've got a B. Well done!, but you can do better!`
      );
      break;
    case score >= 60:
      console.log(
        `Hello ${name}, you've got a C+. Good job!, but you can do better!`
      );
      break;
    case score >= 50:
      console.log(`Hello ${name}, you've got a C. You need to work harder!`);
      break;
    case score >= 40:
      console.log(
        `Hello ${name}, you've got a D. You need to work much harder!`
      );
      break;
    default:
      console.log(
        `Hello ${name}, you've got an F. What's wrong with you! You need to pay proper attention and work very hard!`
      );
  }
}

findGrade2('Arya Stark', 63);
findGrade2('Lianna Mormont', 95)