let nums = [1, 1, 2, 3, 3, 4];
let mySet = new Set(nums);

console.log(mySet);


// PRACTICE QUESTIONS + SOLUTIONS
// ---------------------------

// Q1: Duplicates remove karo array se.

let arr2 = [5, 5, 6, 7, 7, 8];
let cleanSet = new Set(arr2);
console.log(cleanSet);


// Q2: Set par add, delete, has use karo.

let fruitSet = new Set(["apple", "banana"]);
fruitSet.delete("apple");
fruitSet.add("orange");
console.log("Has banana?", fruitSet.has("banana"));
console.log(fruitSet);


// Q3: clear.

let tempSet = new Set([1, 2, 3]);
tempSet.clear();
console.log(tempSet);
