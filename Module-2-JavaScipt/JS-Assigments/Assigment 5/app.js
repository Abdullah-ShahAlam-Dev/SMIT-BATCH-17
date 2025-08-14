// -----------------------CHAPTER 12 13 14 From Book
// -----------------------Q1
var ascii = prompt("Enter a any character")
if (ascii >= "0" && ascii < "9") { //48 se 57 tak
    document.writeln(`<br><h4>Q1: Check Input DataType</h4>It is a Number`)
}
else if (ascii >= "A" && ascii <= "Z") { //65 se 90 tak
    document.writeln(`<br><h4>Q1: Check Input DataType</h4>It is a Uppercase letter`)
}
else if (ascii >= "a" && ascii <= "z") { //97 se 122 tak
    document.writeln(`<br><h4>Q1: Check Input DataType</h4>It is a Lowecase letter`)
}
else {
    document.writeln(`<br><h4>Q1: Check Input DataType</h4>It is a special character.`)
}


// -----------------------Q2
var num1 = prompt("Enter a first number")
// var num1 = parseInt(num)
var num2 = prompt("Enter a second number")
if (num1 >num2) { //48 se 57 tak
    document.writeln(`<br><h4>Q2: GREATER NUMBER</h4>First Number: ${num1} is Greater`)
}
else if (num1 <num2) { //65 se 90 tak
    document.writeln(`<br><h4>Q2: GREATER NUMBER</h4>Second Number: ${num2} is Greater`)
}
else {
    document.writeln(`<br><h4>Q2: GREATER NUMBER </h2>Both Numbers Are Same😛.`)
}


// -----------------------Q3
var num = prompt("Enter a first number")
var num = parseInt(num)

if (num > 0) {
    document.writeln(`<br><h4>Q3: SIGN CHECKER</h4>Your Number: ${num} is Positive Integer`)
}
else if (num<0) {
    document.writeln(`<br><h4>Q3: SIGN CHECKER</h4>Your Number: ${num} is Positive Integer`)
}
else {
    document.writeln(`<br><h4>Q3: SIGN CHECKER</h4>Your Number: ${num} is Zero`)
}



// -----------------------Q4
var vovells = prompt("Enter a any letter")
var vovells = vovells.toLowerCase(); // for lower case

if (vovells.length !== 1) { // use .lentgh property for reject more than 1 character
    document.writeln(`<br><h4>Q4: VOWELLS CHECKER</h4>Please Enter Only One Letter, ${vovells}!`)
}
else if (vovells >= "a" && vovells <= "z") {
    if (vovells === 'a' || vovells === 'e' || vovells === 'i' || vovells === 'o' || vovells === 'u') {
        document.writeln(`<br><h4>Q4: VOWELLS CHECKER</h4>Your Letter: ${vovells} is Vowells.`)
    }
    else{
        document.writeln(`<br><h4>Q4: VOWELLS CHECKER</h4>Your Letter: ${vovells} is Consonent.`)
    }
}
else {
    document.writeln(`<br><h4>Q4: VOWELLS CHECKER</h4>Please enter a valid alphabet letter.`)
}



// -----------------------Q5
var original_pass = "m@shaikhabdullah.Shah";
var u_pass = prompt("Please Enter your password");

// Check if user entered something
if (u_pass === null || u_pass.length === 0) { // lenth property for reject empty string, and  null for reject no input
    document.writeln(`<br><h4>Q5: PASSWORD CHECKER</h4>"Please enter your password"`);
} 
else if (u_pass === original_pass) {
    document.writeln(`<br><h4>Q5: PASSWORD CHECKER</h4>"Correct! The password you entered matches the original password"`);
} 
else {
    document.writeln(`<br><h4>Q5: PASSWORD CHECKER</h4>"Incorrect password"`);
}

// -----------------------Q6
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.writeln(`<br><h4>Q6 : CODE FIXED </h4> ${greeting}`);



// -----------------------Q7
// Get time input from user
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));

if (isNaN(time)) {// Validate input, accept only numbers
    alert("Invalid input! Please enter a valid number (e.g., 800, 1430)");
} else if (time < 0 || time > 2359) {
    alert("Time must be between 0000 and 2359");
} else {
    var minutes = time % 100; // Check for valid minutes (last 2 digits)
    if (minutes > 59) {
        alert("Invalid minutes! Minutes must be 00-59");
    } else {
        var greeting;
        
        if (time >= 0 && time < 1200) {
            greeting = "Good morning!";
        } else if (time >= 1200 && time < 1700) {
            greeting = "Good afternoon!";
        } else if (time >= 1700 && time < 2100) {
            greeting = "Good evening!";
        } else {
            greeting = "Good night!";
        }
        alert(greeting);    // Output the greeting
    }
}

