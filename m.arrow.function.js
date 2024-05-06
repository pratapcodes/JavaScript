// is => arrow function are treated as first class citizen

// arrow function
// anonymous function

// () => {};

// const sayHi = () => {
//   console.log("hello");
// };
// sayHi();

// const sayHi = (name) => {
//   console.log(`hello ${name}`);
// };
// sayHi("Pratap");

// const getSum = (num1, num2) => {
//   let sum = num1 + num2;

//   return sum;
// };
// const result = getSum(45, 55);
// console.log(result);

// WAF to get product of two number

// const getProduct = (a, b) => {
//   product = a * b;

//   return product;
// };
// const result = getProduct(4, 5);
// console.log(result);

// Write an arrow function that provide number is odd or even

// const checkOddEven = (a) => {
//   let remainder = a % 2;

//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// };
// const result = checkOddEven(42);
// console.log(result);

// 1. Write a function that checks if the provided number is odd or even.

// 2. Write a function that takes a number and prints value from 0 to that number (use while loop).

// 3. Write a function that takes "add"/"subtract"/"multiply"/"divide" and
//    two numbers as parameters and perform appropriate operations.

// 4. Write a function that takes day of week as parameter and
//     returns 1,2,3,4,5,6. Example.. Provided sunday should return 1, monday returns 2

// 5. Write a function that takes 10 numbers and calculates the average of the provided numbers.

// 6. Write a function that takes a number as a parameter and returns a sum from
//     0 to that number. E.g if number is 5 then function should return 0+1+2+3+4+5=15

// 7. WAF that converts dollars into cents.

// 8. WAF that converts temperature in Celsius into Fahrenheit.

// 9. WAF that calculates the factorial of a number.

// 10. WAF that calculates the given number is prime or not.

//  arrow finctions =>   adv.     => concise syntax
// more cleaner and more readable code
// this binding

// const addNumbers = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// };
// const result = addNumbers(10, 25);
// console.log(result);

// OR equivalent (Senior level)

// const addNumbers = (num1, num2) => num1 + num2;
// const result = addNumbers(10, 30);
// console.log(result);

// ? odd/even
// const checkOddEven = (num) => {
//   let rem = num % 2;
//   if (rem === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };
// const result = checkOddEven(5);
// console.log(result);

// senior level

// const checkOddEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

// const result = checkOddEven(50);
// console.log(result);

// Write an arrow function that prints average of any three numbers
// const averageNumber = (a, b, c) => {
//   let sum = a + b + c;
//   let average = sum / 3;

//   return average;
// };
// const result = averageNumber(30, 40, 50);
// console.log(result);

// Senior level(expert)

// const averageNumber = (a, b, c) => ((a + b + c) / 3).toFixed(2); // single value fixed huda

// const result = averageNumber(4, 7, 9);
// console.log(result);

// 9. WAF that calculates the factorial of a number.
// 5! =5*4*3*2*1
// const calculateFactorial = (a) => {
//   let factorial = 1;

//   for (let i = 1; i <= a; i++) {
//       // factorial *= i;     x = x * i;
//     factorial = factorial * i;
//   }
//   return factorial;
// };
// const factorial = calculateFactorial(5);
// console.log(factorial);

// WAF that accepts first name and last name as arguments and returns full name

// const getFullName = (firstName, lastName) => {
//   let fullName = `${firstName} ${lastName}`;
//   return fullName;
// };
// const fullName = getFullName("Pratap", "Singh");
// console.log(fullName);

//  alternative (senior level ^_^)

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// const fullName = getFullName("Pratap", "Singh");
// console.log(fullName);

// TODO: WAF tha takes "Bearer abcd12345" as  argument and return "abcd12345"
