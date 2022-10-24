//string
const personalName = "Karla"; //'Karla',

//template string
const myTemplate = `${personalName} is my friend`; // personalNName + "your string"

//number
const numberOfBananas = 27;

//boolean
const hasPets = true;

//collections -> objects and arrays
const students = [
  {
    name: "Morteza",
    age: 25,
  },
  {
    name: "Ana",
    age: 27,
  },
  {
    name: "Viviana",
    age: 29,
  },
];

// console.log(students);

// Logical Operators & Comparison Operators

const temperature = 16;
const raining = false;

const open = true;
const age = 17;

//Problem 1: We have a robot that needs to greet customers or send them away. Business logic: the club has to be open and the person has to be at least 18.

if (open === true && age > 17) {
  console.log("Welcome");
} else {
  console.log("Go home!");
}

//Problem 2: I want to know if I need to take a coat or not. Business logic: I need a coat if the temperature is under 18 or if it's raining.

if (raining === true || temperature < 18) {
  console.log("Take your coat");
} else {
  console.log("No need for a coat today");
}
