console.log("Executing File PP.js -->")


// let object ={
//     name:"Abdullah",
//     age
// }


 let obj = {
    name : "hamza",
    age : 18,
}

let newObj = {
    name :"huzaifa",
    age : 20
}
function normal (name, age, skill) {
    studentName = name,
    studentAge = age,
    studentSkill = skill
    
}


function Student (name, age, skill) {
    this.studentName = name,
    this.studentAge = age,
    this.studentSkill = skill
    
}
// console.log(new Student('Abdullah',20,'Intermediate'));
console.log( a=new Student());
console.log(a)
// console.log(normal);

// we seee that consturcor function directly kxh return nhi krtaa  wo ek new ka keyword use krta hi so us new ki keywords jo ki ek empty object bnta hi so wo all properties hold krleta hi object ki

console.log( normal.prototype);
console.log( Object.prototype);
console.log( Student.prototype);