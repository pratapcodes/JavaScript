// jan 18
// destructure

const laptop1 = {
  name: "mac air",
  brand: "apple",
  ssd: 512,
  variant: {
    color1: "grey",
    color2: "black",
  },
};
// console.log(laptop1.name);
// console.log(laptop1.brand);
// console.log(laptop1.ssd);

//destructure  // getting hactic to use dot dot like above one so we use destructure

// const {
//   name,
//   ssd,
//   variant: { color1, color2 },
// } = laptop1;
// console.log(name, ssd, color1, color2);

// let firstName = "Rajan";
// const student1 = {
//   firstName: "Pratap",
//   lastName: "Saru",
//   address: {
//     temporary: "ktm",
//     permanent: "Nawalpur",
//   },
// };

// double destructure    // when making this, just keep what you want as an output

// const {
//   firstName: fname, // renaming because of same variable name
//   lastName,
//   address: { temporary, permanent }, // double destructure
//   //   address: { temporary: tempAdd, permanent }, rrenamin temporary to tempAdd
// } = student1;

// console.log(firstName, tempAdd);

// ?

// const person1 = {
//   firstName: "Top",
//   lastName: "Saru",
//   //   fullName: () => {
//   //     return `${this.firstName} ${this.lastName}`;
//   //   },
//   // };

//   // method
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person1.fullName());
