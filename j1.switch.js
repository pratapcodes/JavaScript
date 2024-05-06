// // switch

// // Multiple choice questions

// // let day = 6;
// // if (day === 1) {
// //   console.log("Sunday");
// // } else if (day === 2) {
// //   console.log("Monday");
// // } else if (day === 3) {
// //   console.log("Tuesday");
// // } else if (day === 4) {
// //   console.log("Wednesday");
// // } else if (day === 5) {
// //   console.log("Thursday");
// // } else if (day === 6) {
// //   console.log("Friday");
// // } else if (day === 7) {
// //   console.log("Saturday");
// // } else {
// //   console.log("Invalid day number");
// // }

// // switch case  // it is not an alternative of if else but it can handle like multiple choice questions
// it is the case of ( === )  which checks both data type and number

// // let day = 1;
// // switch (day) {
// //   case 1: {
// //     console.log("Sunday");
// //     break;
// //   }
// //   case 2: {
// //     console.log("Monday");
// //     break;
// //   }
// //   case 3: {
// //     console.log("Tuesday");
// //     break;
// //   }
// //   case 4: {
// //     console.log("Wednesday");
// //     break;
// //   }
// //   case 5: {
// //     console.log("Thursday");
// //     break;
// //   }
// //   case 6: {
// //     console.log("Friday");
// //     break;
// //   }
// //   case 7: {
// //     console.log("Saturday");
// //     break;
// //   }
//   default:
//     console.log("Invalid day number");
// }

// ? check if provided number is odd or even
// let num = 5;
// let remainder = num % 2;
// if (remainder == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let num = 4;
// let rem = num % 2;
// switch (rem) {
//   case 0: {
//     console.log(`${num} is Even`);
//     break;
//   }
//   default:
//     console.log(`${num} is Odd`);
// }

// =================================================================

// ternary

// let x = 1; // 0 or 1

// if (x === 0) {
//   console.log("False");
// } else {
//   console.log("True");
// }

// x === 0 ? console.log("False") : console.log("True");

// let num = 51;
// let remainder = num % 2;
// remainder = 0 ? console.log("False") : console.log("True");
// remainder = 0 ? console.log("Even") : console.log("Odd");

// ?  find the greatest among two numbers using ternary operator

// let num1 = 50;
// let num2 = 60;
// if (num1 > num2) {
//   console.log("num1 is greater");
// } else {
//   console.log("num2 is greater");
// }

let num1 = 50;
let num2 = 60;
let greatest = (greatest =
  num1 > num2 ? console.log("false") : console.log("True"));
