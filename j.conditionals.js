// conditionals
// execution => sequential

// console.log("Hello");
// let sum = 2 + 3;
// if (false) {
//   console.log(sum);
// }
// console.log("Hi");

// ? if
// syntax
// if (condition){
//  some code here
// }

// let x = 5;
// let y = 3;
// if (x > y) {            //true
//   console.log("Hello mom");
//   console.log("Hello dad");
// }

// if else
// syntax
// if (condition) {
//   // some code here
// } else {
//   // some code here
// }

// let isPass = false;
// if (isPass) {
//   console.log("Congratulations!! you have passed.");
// } else {
//   console.log("Please try again....");
// }

// ? check if a number is odd or even
// let num = 45;
// let remainder = num % 2;
// if (remainder === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// ? check if input variable is a number or not

// let x = 0 / 0;     // NAN
// console.log(x);
// const type = typeof x;
// if (type === "number") {
//   console.log("x is a number");
// } else {
//   console.log("x is not a number");
// }

// ? if .... else if.....else

// let num = 20;
// if (num < 0) {
//   console.log("Negative number");
// } else if (num > 0) {
//   console.log("positive number");
// } else {
//   console.log("Zero");
// }

// ? find the largest among two numbers

// let x = 10;
// let y = 10;
// if (x > y) {
//   console.log("x is greater");
// } else if (y > x) {
//   console.log("y is greater");
// } else {
//   console.log("both are equal");
// }

// ? find greatest among three numbers
// let x = 25;
// let y = 70;
// let z = 80;
// if (x > y && x > z) {
//   console.log("x is greater");
// } else if (y > x && y > z) {
//   console.log("y is greater");
// } else {
//   console.log("z is greater");
// }

// ?? 5) Perform arithmetic operation based on the option provided. Set two variables with numbers.
// ?Create another variable called "option" which can be add/subtract/multiply/divide/power.
// ?Based upon the value of the option. Perform appropriate operation.
// eg. if option is "add", perform num1 + num 2.

// let num1 = 5;
// let num2 = 3;
// let option = "remainder";
// if (option === "add") {
//   console.log(num1 + num2);
// } else if (option === "subtract") {
//   console.log(num1 - num2);
// } else if (option === "multiply") {
//   console.log(num1 * num2);
// } else if (option === "divide") {
//   console.log(num1 / num2);
// } else if (option === "power") {
//   console.log(num1 ** num2);
// } else if (option === "remainder") {
//   console.log(num1 % num2);
// } else {
//   console.log("Invalid option");
// }

// ? 6) ?find grade for students marks.
// A. If the mark is greater than or equal to 90, the grade is "A plus".
// B. If the mark is greater than or equal to 80, the grade is "A ".
// C. Grade "B" for marks greater than or equal to 70.
// D. Grade "C" for marks greater than or equal to 60.
// E. Grade "F" for marks less than 60.

// let marks = 89;
// if (marks > 100 || marks < 0) {
//   console.log("Out of range");
// } else if (marks >= 90) {
//   console.log("Grade A +");
// } else if (marks >= 80) {
//   console.log("Grade A");
// } else if (marks >= 70) {
//   console.log("Grade B");
// } else if (marks >= 60) {
//   console.log("Grade c");
// } else {
//   console.log("Grade F");
// }
