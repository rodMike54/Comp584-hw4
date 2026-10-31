//Michael Rodriguez 
// COMP 584 - Homework 4 

// Exercise 1: Fix the variable name and formatting
var NewNum = 10;
if (NewNum == 10) {
 console.log(NewNum); //print out the variable
}

// Exercise 2: Store three different data types
let studentName = `Michael`; //store string
let price = 12.50; //store double
let isStudent = true; //store bool
console.log(studentName, price, isStudent); //print out the variables

// Exercise 3: Store the student's current score and explain the work in a single line comment
let currentScore = 95;
console.log(currentScore);  //prints out the value of the current score variable

// Exercise 4: Compare a string and a number
console.log('100' == 100); //print true if value is correct
console.log('100' === 100); //checks if the value and the datatype is correct

// Exercise 5: Choose the schedule based on the day
let isWeekend = false; 
let schedule;
schedule = isWeekend ? "Day off" : "Work day"; //checks and stores if true or false and stores the string
console.log(schedule);

// Exercise 6: Check the user's age
let userAge = 16;
if (userAge >= 18) {
 console.log("Access Granted");
} else {
 console.log("Access Denied");
}
//should print out access denied due to the 16

// Exercise 7: Check both conditions
let hasPermission = true;
let itemCount = 3;
if (hasPermission == true && itemCount < 5) {
 console.log("Ready to process");
}
//should print ready to process due to the 'and' condition

// Exercise 8: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
 console.log(i);

  break;
 }
  
// Exercise 9: Stop the loop when it reaches 7
for (let i = 0; i <= 9; i++) {
 if (i == 7) {
    }
    console.log(i);
}

// Exercise 10: Run the loop only once
let counter = 10;
do {
 console.log("Running once");
} while (counter < 10);

// Exercise 11: Multiply width and height
function calculateArea(width, height) {
 return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);

// Exercise 12: Add, remove, and find fruit
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

// Exercise 13: Copy an array using slice
let originalData = [1, 2, 3];
let clonedData = originalData.slice();
console.log(clonedData);
// slice makes a shallow copy. Nested objects are still shared.

// Exercise 14: Create an Animal constructor
function Animal(species, sound) {
 this.species = species;
 this.sound = sound;
}

// Exercise 15: Create two animals and store them in an array
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log(animalArray);