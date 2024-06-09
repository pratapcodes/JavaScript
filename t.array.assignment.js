// jan 21

// ?   create an array called friendList and add your friends name.
// ? print out your friend's name one by one.

// const friendList = ["Pratap", "Shyam", "Ram", "Milan"];
// friendList.map((item, index, self) => {
//   console.log(item);
// });

// create an array called favourite sportsPerson and use for loop to print the player's name.
// const sportsPersonList = ["Paras", "Rohit", "Sompal", "Asif", "Lalit"];
// sportsPersonList.forEach((item, index, self) => {
//   console.log(item);
// });

// create an array called myFavourite actors and print out who is your best actor
// const actorList = [
//   "Srk",
//   "Salman Khan",
//   "Saugat Malla",
//   "Tom Hanks",
//   "Daya Rai",
// ];
// actorList.forEach((item, index, self) => {
//   if (item === "Tom Hanks") {
//     console.log(`${item} is my favourite actor`);
//   } else {
//     console.log(`${item}Not my fav`);
//   }
// });

// Make an array of numbers that double the items
// const numList = [10, 20, 30, 1, 2, 3, 4, 5, 6];
// const newNumList = numList.map((item, index, self) => {
//   let newItem = 2 * item;
//   return newItem;
// });
// console.log(newNumList);

// Make an arary of numbers and print whether the numbers are odd or even

const checkOddOrEven = (num) => {
  let remainder = num % 2;
  let result;

  if (remainder === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
};
const numbers = [10, 11, 12, 13, 14, 15, 16, 17];
numbers.forEach((item, index, self) => {
  const result = checkOddOrEven(item);
  console.log(`${item} is a ${result}`);
});
