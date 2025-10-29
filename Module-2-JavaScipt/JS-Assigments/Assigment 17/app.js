//********************Chapter 68–77 (Objects)********************//

//---------------------Q1
document.write("<h2>Q1: Calculate Total Price of Each and All Items</h2>");

var itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 }
];

let totalAll = 0;

for (let i = 0; i < itemsArray.length; i++) {
  let total = itemsArray[i].price * itemsArray[i].quantity;
  document.write(
    `Item: ${itemsArray[i].name}, Price: ${itemsArray[i].price}, Quantity: ${itemsArray[i].quantity}, Total = ${total} <br>`
  );
  totalAll += total;
}

document.write(`<b>Total Price of All Items: ${totalAll}</b><br>`);

//---------------------Q2
document.write("<h2>Q2: Check Properties in Object</h2>");

var user = {
  name: "Abdullah",
  email: "m@shaikhabdullah.shah",
  password: "12345",
  age: 22,
  gender: "Male",
  city: "Karachi",
  country: "Pakistan"
};

document.write(`User Object: ${JSON.stringify(user)}<br>`);

document.write("<h3>Checking Properties:</h3>");
document.write(`Has 'age'? ${user.hasOwnProperty("age")} <br>`);
document.write(`Has 'country'? ${user.hasOwnProperty("country")} <br>`);
document.write(`Has 'firstName'? ${user.hasOwnProperty("firstName")} <br>`);
document.write(`Has 'lastName'? ${user.hasOwnProperty("lastName")} <br>`);

// //M2
// console.log("-----Using 'in' Operator-----");
// console.log("age" in user);        // true
// console.log("country" in user);    // true
// console.log("firstName" in user);  // false
// console.log("lastName" in user);   // false


//---------------------Q3
document.write("<h2>Q3: Constructor Function (Multiple Records)</h2>");

function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

let student1 = new Student("Ayesha", 20, "BSCS");
let student2 = new Student("Amna", 22, "BBA");
let student3 = new Student("Fatima", 21, "Software Engineering");

document.write(`<b>Student 1:</b> ${JSON.stringify(student1)}<br>`);
document.write(`<b>Student 2:</b> ${JSON.stringify(student2)}<br>`);
document.write(`<b>Student 3:</b> ${JSON.stringify(student3)}<br>`);

//---------------------Q4
document.write("<h2>Q4: Population Data (Education & Profession)</h2>");

function Citizen(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

// Example Entries (In real assignment, you can take input from form or select/radio boxes)
let person1 = new Citizen("Hassan", "Male", "Karachi", "BSCS", "Engineer");
let person2 = new Citizen("Ayesha", "Female", "Lahore", "MBA", "Manager");
let person3 = new Citizen("Zain", "Male", "Islamabad", "Intermediate", "Teacher");

let citizens = [person1, person2, person3];

// Optionally Save in Local Storage (Bonus)
localStorage.setItem("citizensData", JSON.stringify(citizens));

document.write("<h3>All Citizens Data:</h3>");
for (let i = 0; i < citizens.length; i++) {
  document.write(`${i + 1}) ${JSON.stringify(citizens[i])} <br>`);
}
