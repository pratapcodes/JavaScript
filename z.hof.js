// hof => high order function

// 1. function returning function
// 2. function which accepts another function as an argument

// ? case for number 2

// const numbers = [1, 5, 7, 9];

// map, filter, reduce, find   // map function vitra arko function haleko le hof vayo.
// numbers.map((item, index, self) => {
//   console.log(item);
// });

// ? callback funtion => function which is passed as an argument to another function

// const getSum = (x, y, printValue) => {
//   // theory getSum => hof
//   sum = x + y;
//   printValue(sum);
// };
// const printValue = (value) => {
//   // theory printValue => callback function
//   console.log(value);
// };
// getSum(2, 3, printValue);

// advance js

// ? case for number 1

// const getSum = (x, y) => {
//   const calculateSum = () => {
//     let sum = x + y;
//     return sum;
//   };
//   return calculateSum;
// };

// const func = getSum(2, 3);
// const result = func();
// console.log(result);

// OR
// const result = getSum(10, 20)();
// console.log(result);

// closure => function with its lexical environment

const getProduct = (num1) => {
  const doMultiply = (num2) => {
    let product = num1 * num2;
    return product;
  };
  return doMultiply;
};
const doMultiply = getProduct(5);
const product = doMultiply(10);
console.log(product);
