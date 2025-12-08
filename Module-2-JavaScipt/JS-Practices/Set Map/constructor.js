console.log("JS Practice File Running...");


// Constructor Function + Prototype
// =====================================

// --- Main Concept ---
function Student(name, age, skills) {
    this.studentName = name;
    this.studentAge = age;
    this.studentSkills = skills;
}

Student.prototype.calcAge = function(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    console.log("Calculated Age:", age);
};

let student1 = new Student("Abdullah", 21, ["HTML", "CSS"]);
console.log(student1.hasOwnProperty("calcAge"));
student1.calcAge(2004);


// PRACTICE QUESTIONS 
// ---------------------------

// Q1: Ek Car constructor banao jisme brand, model aur year ho.
//     Phir ek method banao jo car ki age calculate kare.

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.carAge = function() {
    let currentYear = new Date().getFullYear();
    console.log("Car Age:", currentYear - this.year);
};

let myCar = new Car("Toyota", "Corolla", 2018);
myCar.carAge();


// Q2: Ek Teacher constructor banao with name + subject,
//     aur method introduce() jo teacher ko introduce kare.

function Teacher(name, subject) {
    this.name = name;
    this.subject = subject;
}

Teacher.prototype.introduce = function() {
    console.log("My name is " + this.name + " and I teach " + this.subject);
};

let t1 = new Teacher("Ali", "Math");
t1.introduce();


// Q3: hasOwnProperty ka result check karo.

function Demo() {
    this.x = 10;
}

Demo.prototype.show = function() {
    console.log("Hello");
};

let d1 = new Demo();

console.log("Has show property?", d1.hasOwnProperty("show")); // false
