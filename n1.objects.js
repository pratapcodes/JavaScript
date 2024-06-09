// jan 17

// object => key value pair

// primitive data types

// string
//boolean
// number
// null
// undefined

// non-primitive
// object => key value pair
// key is also called property
// grouping of primitive datatype

// let student1 = {
//   firstName: "Pratap",
//   lastName: "Singh",
//   college: "Broadway",
//   age: 23,
//   permanentAddress: "ktm",
//   temporaryAddress: "lalitpur",
//   isMarried: false,
//   isGraduaated: null,
//   height: undefined,
// };
// // console.log(student1);
// console.log(typeof student1); //object

// CRUD
// C => create
// R => Read
// U => Update
// D => Delete/Remove

// const courseDetails = {
//   name: "MERN",
//   duration: 90,
//   type: "Full stack",
//   numberOfStudents: 15,
// };

// ? Read operations
// ? dot operator and square operator
// console.log(courseDetails.name); // dot operator
// console.log(courseDetails.numberOfStudents); // dot operator
// console.log(courseDetails["numberOfStudents"]);
// console.log(courseDetails["type"]); // square operator

// ? Delete operation => remove specified property

//delete courseDetails.type;
// delete courseDetails["duration"];
// console.log(courseDetails);

// const countryDetails = {
//   name: "Nepal",
//   population: "3 crore",
//   states: 7,
//   districts: 77,
//   localAdministrations: 753,
//   isRepublic: true,
//   isSecular: true,
//   famousPlace: "Lumbini",
// };
// console.log(countryDetails.name);   // console.log(countryDetails["name"]);      //same
// console.log(countryDetails["famousPlace"]);

// delete countryDetails.localAdministrations;
// console.log(countryDetails);

// ? upsert => update or Insert
// ? update
// countryDetails.name = "India"; //countryDetails["name"] = "India";
// countryDetails["states"] = 28;
// console.log(countryDetails);

// ? add
// console.log(countryDetails);
// countryDetails.gdp = "2 million";
// console.log(countryDetails);

// const bossDetails = {
//   firstName: "Pratap",
//   lastName: "Saru",
//   age: 24,
//   height: 5.3,
//   college: "EEC",
//   job: null,
// };
// bossDetails.middleName = "Singh";
// bossDetails.job = "ceo";
// delete bossDetails.age;
// console.log(bossDetails);

// const laptopDetails = {
//   name: "GF750",
//   brand: "MSI",
//   ram: 16,
//   ssd: 512,
//   display: "15.3",
//   graphics: "nvidia",
//   battery: "51 Whr",
//   processor: "i7 10750H",
// };

// ? Display laptop name with battery capacity   // GF75 has 51Whr battery

// console.log(`${laptopDetails.name} has ${laptopDetails.battery} battery.`);

// ? change ram size to 18 gigs

// laptopDetails.ram = 18;     // laptopDetails["ram"] = 18;   // same
// console.log(laptopDetails);

// ? add another property called memory frequency  with 3200mhz value
// ? add another property called weight whose value is 3 kg

// laptopDetails.memoryFrequency = "3200mhz";
// laptopDetails["weight"] = "3kg";
// console.log(laptopDetails);

// ? update ssd size by 300 gb

// laptopDetails.ssd = laptopDetails.ssd + 300;
// console.log(laptopDetails);

// ? delete processor property

// delete laptopDetails.processor;
// console.log(laptopDetails);

// ? create an object named myHouseDetails and add following
// const myHouseDetails = {
//   numberOfRooms: 9,
//   numberOfMemebers: 10,
//   colorOfHouse: "green",
//   builtYear: 2011,
//   numberOfStorey: 3,
// };
// console.log(myHouseDetails);

// delete numberOfMembers property
// delete myHouseDetails.numberOfMemebers;
// console.log(myHouseDetails);

// update numberOfRooms by new value
// myHouseDetails.numberOfRooms = 20;
// console.log(myHouseDetails);

// ? add a new property called estimatedPriceOfHouse
// myHouseDetails.estimatedPriceOfHouse = "2 crores";
// console.log(myHouseDetails);

// ? Print out all the properties on the console like "I have a green coloured house with 9 rooms where 10 people
// are living. The house is 3 storey and was built on 2011 with an estimated budget of 2 crores"

// console.log(`I have a ${myHouseDetails.colorOfHouse} house with ${myHouseDetails.numberOfRooms} rooms where
// ${myHouseDetails.numberOfMemebers} people are living.The house is ${myHouseDetails.numberOfStorey}storey
// and was built on ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}.`);

// ? nested object

const studentDetails = {
  firstName: "Rohan",
  lastName: "Bhandari",
  age: 22,
  college: "Misssouri state University",
  address: {
    temporary: "Texas",
    permanent: "Katahmandu",
  },
};
// console.log(studentDetails.address.permanent);
// console.log(studentDetails["address"]["permanent"]);   // both gives same result

// studentDetails.address.permanent = "Missuori";
// studentDetails["address"]["permanent"] = "Kansas";   //same
// console.log(studentDetails);

const hospitalDetails = {
  name: "Bir",
  location: "Kathmandu",
  patientCapacity: 3000,
  numberOfBed: 2000,
  numberOfBlock: 25,
  numberOfDoctor: 200,
  numberOfNurse: 2000,
};
console.log(hospitalDetails);
