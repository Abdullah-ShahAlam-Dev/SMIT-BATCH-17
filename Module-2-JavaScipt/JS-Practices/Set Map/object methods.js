let user = {
    name: "Abdullah",
    age: 21
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

Object.seal(user);
user.age = 22; // allowed
console.log(user);


// PRACTICE QUESTIONS + SOLUTIONS
// ---------------------------

// Q1: Ek object banao aur keys/values/entries print karo.

let person = { name: "Ali", city: "Karachi" };
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


// Q2: freeze use karo aur check karo value change hoti hai ya nahi.

let obj2 = { a: 10 };
Object.freeze(obj2);
obj2.a = 50; // change nahi hoga
console.log(obj2);


// Q3: seal object par new property add kar ke dekho.

let obj3 = { id: 1 };
Object.seal(obj3);
obj3.id = 2; // allowed
obj3.name = "New"; // add nahi hoga
console.log(obj3);
