// jan 23

// find => returns first matching item based on condition

// const scores = [2, 4, 5, 7, 8, 9, 11, 23, 17];
// const newScores = scores.find((item, index, self) => {
//   if (item > 15) {
//     return item;
//   }
// });
// console.log(newScores);

// const students = ["Suresh", "Kamal", "Pratap", "Ram"];

// const newStudenets = students.find((item, index, self) => {
//   if (item === "Pratap") {
//     return item;
//   }
// });
// console.log(newStudenets);

// const newStudents = students.map((item, index, self) => {
//   if (item === "Pratap") {
//     return "Singh";
//   } else {
//     return item;
//   }
// });
// console.log(newStudents);

// ? push, pop, map, filter, find

// const nations = ["Nepal", "India", "China"];

// ? push
// nations.push("Thailand");
// console.log(nations);

// ? pop
// nations.pop();
// console.log(nations);

// ? map => changes array content
// const prices = [100, 150, 177, 95, 65];
// const newPrices = prices.map((item, index, self) => {
//   let newItem = item - 20;
//   return newItem;
// });
// console.log(newPrices);

// const newPrices = prices.map((item, index, self) => {
//   if (item === 150) {
//     return item + 100;
//   } else {
//     return item;
//   }
// });
// console.log(newPrices);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];
// const newStudentData = studentData.map((item, index, self) => {
//   let newMarks = item.score + 5;
//   let newItem = { ...item, score: newMarks };
//   return newItem;
// });
// console.log(newStudentData);

// ? filter
// ? scores greater than or equals to 32

// const marksList = [25, 14, 17, 32, 37, 38, 45, 3, 7, 33, 9];
// const newMarkList = marksList.filter((item, index, self) => {
//   if (item >= 32) {
//     return item;
//   }
// });
// console.log(newMarkList);

// const studentData = [
//   {
//     name: "A",
//     score: 85,
//   },
//   {
//     name: "B",
//     score: 91,
//   },
//   {
//     name: "C",
//     score: 75,
//   },
// ];

// ? score greater than 80
// const newStudentData = studentData.filter((item) => {
//   if (item.score > 80) {
//     return item;
//   }
// });
// console.log(newStudentData);

// ? find
// const marksList = [25, 14, 17, 32, 37, 38, 45, 3, 7, 33, 9];
// const newMarkList = marksList.find((item, index, self) => {
//   if (item >= 32) {
//     return item;
//   }
// });
// console.log(newMarkList);

// ? sort => dictionary order
// const nameList = [
//   "Nepal",
//   "India",
//   "China",
//   "Bhutan",
//   "America",
//   "Zimbabwe",
//   "Australlia",
//   "Argentina",
// ];
// nameList.sort();
// console.log(nameList);

// const nums = [1, 25, 100, 125, 22, 266, 1111, 45, 80];
// nums.sort();
// console.log(nums);

// const nums = [1, 25, 100, 125, 22, 266, 1111, 45, 80];
// a - b => ascending sort
// b - a => descending sort
// nums.sort((a, b) => {
//   return a - b;
// });
// console.log(nums);

// array of words
const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const fName = "Rajeev"; // ["R","a","j","e","e","v"]
// console.log(fName.length);

// ? strings whose length is greater than 6

// const newWords = words.filter((item, index) => {
//   if (item.length > 6) {
//     return item; // OR simply return item.length >6
//   }
// });
// console.log(newWords);

// const country = "Nepal";

// ["N","e","p","a",l]
// console.log(country[0]);

// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: "Suresh",
//   enumerable: true, //show or hide
//   writable: true, //editable
//   configurable: true, //deletable
// });
// console.log(obj);

// ? reduce
// const scores = [45, 55, 65, 75];

// calculate total score
// let sum = 0;
// scores.map((item) => {
//   sum = sum + item;
// });
// console.log(sum);

// garo laayo vani reduce nagarda hunchha ...mathi ko jasto map use garey ni hunchha.

// const totalValue = scores.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(totalValue);

// let values = [10, 25, 35, 5];
// calculate total value by multiplying each other
// const newValues = values.reduce((product, item, index, self) => {
//   product = product * item;
//   return product;
// }, 1);
// console.log(newValues);

// OR in one line
// const newValues = values.reduce((product, item) => product * item, 1);
// console.log(newValues);

// ? reverse
// ? reverse the order of array

// const countries = ["Nepal", "India", "China", "Pakistan", "Bhutan"];
// countries.reverse();
// console.log(countries);

// const marks = [25, 55, 10, 77];
// marks.reverse();
// console.log(marks);

// ? use case
const students = ["Pratap", "Ram", "Suresh", "Arjun", "Babu"];
// ascending order
// students.sort();

// descending order
// students.reverse();
// console.log(students);

// OR

// descending order
students.sort().reverse();
console.log(students);
