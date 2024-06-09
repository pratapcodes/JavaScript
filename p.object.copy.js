// Jan 18

// object copy
// To copy object use spread operator and structuredclone

const laptopDetails1 = {
  name: "Mac bbok pro",
  brand: "apple",
  model: 2023,
  Storage: {
    ram: 8,
    ssd: 512,
  },
};

// shallow copy
// copy by value, copy by reference

// const laptopDetails2 = laptopDetails1; //reference
// laptopDetails2.name = "Asus Tuf";
// console.log(laptopDetails2);
// console.log(laptopDetails1);

// ? spread operator(...)

// const laptopDetails2 = {
//   ...laptopDetails1,
// };
// laptopDetails2.name = "Asus Tuf";
// laptopDetails2.Storage.ram = 16;
// console.log(laptopDetails1);
// console.log(laptopDetails2);

// ? structuredClone (deep copy) or (true copy)

// const laptopDetails2 = structuredClone(laptopDetails1);
// laptopDetails2.name = "P";
// laptopDetails2.Storage.ssd = 1500;
// console.log(laptopDetails2);
// console.log(laptopDetails1);
