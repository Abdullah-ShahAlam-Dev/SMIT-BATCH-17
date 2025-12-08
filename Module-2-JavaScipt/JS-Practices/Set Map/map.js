let myMap = new Map();
myMap.set("name", "Abdullah");
myMap.set("age", 21);

console.log(myMap.get("name"));
console.log(myMap);


// PRACTICE QUESTIONS + SOLUTIONS
// ---------------------------

// Q1: 3 keys ka Map banao.

let map1 = new Map();
map1.set("city", "Karachi");
map1.set(10, "numberKey");
map1.set({}, "objectKey");
console.log(map1);


// Q2: Map se ek value read karo.

console.log("City:", map1.get("city"));


// Q3: Ek key delete karo aur size print karo.

map1.delete(10);
console.log("Map Size:", map1.size);
