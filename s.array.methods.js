// jan 19 - jan 21 - jan 23

// let studentList = ["Pratap", "Ram", "Gita"];

//? push => adds element to end of array
// studentList.push("Arun");
// studentList.push("Ram", "Hari");

// console.log(studentList);

// ? pop => remove last item from array
// studentList.pop();
// console.log(studentList);

// ? unshift => add items to start of array

// let studentList = ["Pratap", "Ram", "Gita"];

// studentList.unshift("Hari", "Shyam");
// console.log(studentList);

// ? shift => remove item from start of array and cannot remove multiple values
// studentList.shift();
// console.log(studentList);

// ? map
// ? is used to change items and return new array.
// original array and returned array has same length/size

// const scores = [25, 35, 45, 55, 65];

// // scores.map((item, index, self) => {           // instead of for loop map internally makes a loop
// //   console.log(item);
// // });

// const newScores = scores.map((item, index, self) => {
//   let newScore = item - 10;
//   return newScore; // newScore=[15,25,35,45,55]
// });
// console.log(newScores);

// const marks = [40, 50, 60, 70, 80];
// const newMarkList = marks.map((item, index, self) => item - 10);
// console.log(newMarkList);

// const nameList = ["Suman", "Pratap", "Ram", "Hari"];

// let newNameList = nameList.map((item, index, self) => {
//   if (item === "Pratap") {
//     return item;
//   }
//   let newItem = item.toLowerCase();
//   return newItem;
// });
// console.log(newNameList);

// ? filter, find, slice, splice, some ,every, sort

// ? filter => filters out values from array based upon condition
// ? original array and returned array has max probability of having different size

// ? returns array

// const numList = [10, 25, 35, -12, -25, -35, -45];
// const newNumList = numList.filter((item, index, self) => {
//   return item < 0;
// });
// console.log(newNumList);

// get an array with even scores
// ? const scoreList =[25,26,,78,79,35,45,47,55];
// const scoreList = [25, 26, 78, 79, 35, 45, 47, 55];
// const newScoreList = scoreList.filter((item, index, self) => {
//   return item % 2 === 0;
// });
// console.log(newScoreList);

// ? assignment

// let laptopList = [
//   {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044,
//   },
//   {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//   },
//   {
//     name: "macbook air m2",
//     brand: "apple",
//     price: 1400,
//   },
//   {
//     name: "nitro",
//     brand: "acer",
//     price: 800,
//   },
//   {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700,
//   },
// ];

// ? due to sudden rise in tax, add 10% to the price of laptop

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + (10 / 100) * item.price;
//   item.price = newPrice;
//   return item;
// });
// console.log(newLaptopList);

//  OR (tyo mathi ko copy garera rakhnu ko satta 3 ota ...rakhya ani j change garni vanechha teslai override garni )

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price + (10 / 100) * item.price;
//   let newItem = { ...item, price: newPrice }; // replace price with newPrice
//   return newItem;
// });
// console.log(newLaptopList);

// ? decrease price of each laptop by 20 percent

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - 0.2 * item.price;
//   let newItem = { ...item, price: newPrice };
//   return newItem;
// });
// console.log(newLaptopList);

// ? remove laptops whose price is greater than 1000

// const newLaptopList = laptopList.filter((item, index, self) => {
//   if (item.price <= 1000) {
//     return item.price <= 1000;
//   }
// });
// console.log(newLaptopList);

// ? remove laptop whose brand is apple

// const newLaptopList = laptopList.filter((item, index, self) => {
//   return item.brand !== "apple";
// });
// console.log(newLaptopList);

// ? increase price of asus laptop by 5%

// const newLaptopList = laptopList.map((item, index, self) => {
//   if (item.brand === "asus") {
//     let newPrice = item.price + 0.05 * item.price;
//     let newItem = { ...item, price: newPrice };
//     return newItem;
//   } else {
//     return item;
//   }
// });
// console.log(newLaptopList);
