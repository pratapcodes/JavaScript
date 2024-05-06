// lecture 9 (jan 12)

// WAf that multiples three numbers

// function calculateProduct(x, y, z) {
//   let product = x * y * z;
//   console.log(product);
// }
// calculateProduct(3, 4, 5);

// WAF that checks if provided number is odd or even

// function checkOddEven(num) {
//   let remainder = num % 2;

//   if (remainder === 0) {
//     console.log(`${num} is even.`);
//   } else {
//     console.log(`${num} is odd.`);
//   }
// }

// checkOddEven(11);

// Write a function that takes a number and prints value
// from 0 to that number (use while loop)

// function printValues(num) {
//   for (let i = 0; i <= num; i = i + 1) {
//     console.log(i);
//   }
// }
// printValues(5);

// Write a function that takes "add"/"subtract"/"multiply"/"divide" and two numbers
// as parameters and perform appropriate operation

// function calculator(option, num1, num2) {
//   if (option === "add") {
//     console.log(num1 + num2);
//   } else if (option === "subtract") {
//     console.log(num1 - num2);
//   } else if (option === "multiply") {
//     console.log(num1 * num2);
//   } else if (option === "divide") {
//     console.log(num1 / num2);
//   } else {
//     console.log("Invalid option");
//   }
// }

// calculator("multiply", 10, 3);

// write a function that takes 5 numbers
// and calculate the average of the provided numbers

// function calculateAverage(num1, num2, num3, num4, num5) {
//   // parameters
//   const sum = num1 + num2 + num3 + num4 + num5;
//   let average = sum / 5;
//   return average;
//   //   console.log(average);
// }
// //
// console.log(calculateAverage(10, 20, 30, 40, 50));   // argument => concrete value

// function sayHi() {
//   return "hello";
// }
// const result = sayHi();
// console.log(result);

// WAF that converts rupees to paisa

// function convertRupeesToPaisa(rupees) {
//   const paisa = rupees * 100;

//   return paisa;
// }
// const total = convertRupeesToPaisa(50);
// console.log(total);

// function convertRupeesToPaisa(rupees) {
//   const paisa = rupees * 100;
//   console.log(paisa);
// }
// convertRupeesToPaisa(50);

// let rs = 40;
// let paisa = 0;
// function rupeesToPaisa() {
//   paisa = rs * 100;
// }

// rupeesToPaisa();
// console.log(paisa);

// let sum = 0;
// function getSum(num) {

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
// }
// getSum(5);
// console.log(sum);

// alternative

// function getSum(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }
// const result = getSum(5);
// console.log(result);

// WAF to convert temperature in celsius to fahrenheit

// function convertCelsiusToFahrenheit(celsius) {
//   const fahrenheit = (9 * celsius) / 5 + 32;
//   return fahrenheit;
// }
// const result = convertCelsiusToFahrenheit(37);
// console.log(result);

// function printValues(startValue, endValue) {
//   if (startValue > endValue) {
//     console.log("Start value must be less then end value");
//     return;
//   }
//   for (let i = startValue; i <= endValue; i++) {
//     console.log(i);
//   }
// }
//    // printValues (10,5);
// printValues(10, 30);
