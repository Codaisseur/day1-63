---
title: DIY Solutions
tags:
  - Javascript
---

# Boolean expressions

drinkingAge.js

```javascript
const name = "Philippe";
const age = 19;

const drinkingAgeAmerica = 21;
const drinkingAgeBarbados = 16;
const drinkingAgeNetherlands = 18;

console.log(`${name} can drink in America: ${age >= drinkingAgeAmerica}`);
console.log(`${name} can NOT drink in America: ${age < drinkingAgeAmerica}`);
console.log(`${name} can drink in Barbados: ${age >= drinkingAgeBarbados}`);
console.log(
  `${name} could drink last year in the Netherlands: ${
    age - 1 >= drinkingAgeNetherlands
  }`
);
```

kitchenHygiene.js

```javascript
const startingShift = false;
const cutVegtables = true;
const cleanedFish = false;
const cutChicken = true;

const shouldWashHands = startingShift || cleanedFish || cutChicken;
const noNeedToWashHands = !shouldWashHands; // or !startingShift && !cleanedFish && !cutChicken

console.log(`Should I wash my hands? ${shouldWashHands}`);
console.log(`Can I do without washing? ${noNeedToWashHands}`);
```

openOrNot.js

```javascript
const currentDay = "wednesday";
const currentTime = 20;
const christmasToday = false;

const dayOff = "monday";
const openingTime = 18;
const closingTime = 23;

const openToday = currentDay !== dayOff && !christmasToday;
const openRightNow = currentTime >= openingTime && currentTime < closingTime;

console.log(`Restaurant open? ${openToday && openRightNow}`);
console.log(`Restaurant closed? ${!openToday || !openRightNow}`);
```

## Ternary operator

accessDenied.js

```javascript
const password = "supersecretpassword";
const input = "iamhackingyou";
const isAccountLocked = true;

const passwordCorrect = password === input;

const message =
  passwordCorrect && !isAccountLocked
    ? "Welcome"
    : "Your login attempt failed, contact system administrator";

console.log(message);
```

## Conditionals

Testing if & blocks

```javascript
let age = 20;

if (age >= 18) {
  console.log("adult"); // this block gets run
  console.log("We can add statements inside this block!");
}
if (age < 18) {
  console.log("child"); // this block does not get run
}
```

Using if / else if / else

```javascript
let age = 14; // output should be 'teenager'

if (age >= 18) {
  console.log("adult");
} else if (age < 18 && age > 12) {
  console.log("teenager");
} else {
  console.log("child");
}
```
