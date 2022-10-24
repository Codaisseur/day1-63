//Functions definitions
//1. Smaller scope (or local scope) of the code
//2. It's a method
//3. It's a set of directions
//4. A bit like a recipe

const test = "My test";

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
};

// sayHello("Diana");
// sayHello("Ana");
// sayHello("Fia");

const sum = (num1, num2) => {
  const add = num1 + num2;
  // console.log(add);
  return add;
};

const mySum = sum(3, 7);
console.log("my sum", mySum);
console.log(sum(1, 3));

const highestNumber = (num1, num2) => {
  if (num1 > num2) {
    console.log(`${num1} is bigger`);
  } else {
    console.log(`${num2} is bigger`);
  }
};

// highestNumber(5, 9);
