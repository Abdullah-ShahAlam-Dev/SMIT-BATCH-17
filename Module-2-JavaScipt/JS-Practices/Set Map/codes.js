console.log("Practice File Running...");

// 1) Constructor Function Practice
// ===============================

function Student(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}

// Prototype Method
Student.prototype.showInfo = function () {
    console.log("Student Name:", this.name);
    console.log("Age:", this.age);
    console.log("Skills:", this.skills);
};

let std1 = new Student("Abdullah", 21, ["HTML", "CSS"]);
let std2 = new Student("Hamza", 20, ["JS", "React"]);

std1.showInfo();
std2.showInfo();

console.log("Has Own Property 'showInfo' ?", std1.hasOwnProperty("showInfo")); // false



// 2) Object Methods Practice
// ===============================

let user = {
    id: 101,
    name: "Practice User",
    city: "Karachi"
};

console.log("Object Keys:", Object.keys(user));
console.log("Object Values:", Object.values(user));
console.log("Object Entries:", Object.entries(user));

Object.seal(user); 
user.city = "Lahore"; // allowed
console.log("After Seal:", user);



// 3) Set Practice
// ===============================

let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNums = new Set(numbers);

console.log("Unique Numbers Set:", uniqueNums);
console.log("Has 3?", uniqueNums.has(3));

uniqueNums.add(10);
uniqueNums.delete(2);
console.log("Updated Set:", uniqueNums);



// 4 Map Practice
// ===============================

let myMap = new Map();

myMap.set("name", "Abdullah");
myMap.set("age", 21);
myMap.set({}, "Object Key Example");

console.log("Map Get 'name':", myMap.get("name"));
console.log("Full Map:", myMap);

myMap.delete("age");
console.log("After Delete:", myMap);

console.log("Map Size:", myMap.size);
