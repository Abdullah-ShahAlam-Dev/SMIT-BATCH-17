// **********************************CHAPTER 1******************
// -------------------------------VARIABLES
var Q2 = "Error! Please enter a valid password."
var Q3_msg1 ="Welcome to JS Land..."
var Q3_msg2 ="Happy Coding!"
var Q4_msg_checkbox ="\nPrevent this page from creating additional dialogs."



// ----------------------------------------Q1
// called an object window  method alert
  window.alert("Q1\n"+"Welcome to my website!");


  // ----------------------------------------Q2
alert("Q2\n"+Q2)


// ----------------------------------------Q3
alert("Q3\n"+Q3_msg1+"\n"+Q3_msg2)


// ----------------------------------------Q4
alert("Q4\n"+Q3_msg1)
alert("Q4\n"+Q3_msg2+Q4_msg_checkbox)



// ----------------------------------------Q5
console.log("Hello... I can run JS through my web browser's console");
 


// ----------------------------------------Q6
document.getElementById("showAlert").addEventListener("click", function () {
  alert("Q6\nButton clicked! This is an alert from your JS.");
});






// **********************************CHAPTER 2******************
// ------------------------------Q1
var username;


// ------------------------------Q2
var myname ="Abdullah Shah Alam"


// ------------------------------Q3
// Declaring Varible of JS and Also assigning value calling from message
var message = "Hello World";

// 3c) Display the message in alert box
alert("Q3\n"+message);



// ------------------------------Q4
// 4. Student's bio data in JS variables
var studentName = "Abdullah Shah Alam";
var studentAge = "22 years old";
var studentCourse = "Certified Mobile Application Development";

// Show the data in alert boxes
alert("Q4\n"+studentName);
alert("Q4\n"+studentAge);
alert("Q4\n"+studentCourse);


// ------------------------------Q5
// 5. Display the following alert using one JS variable
var txt = "PIZZA";
txt += "\n" + txt.slice(0, 4);
txt += "\n" + txt.slice(0, 3);
txt += "\n" + txt.slice(0, 2);
txt += "\n" + txt.slice(0, 1);
alert("Q5\n"+txt)



// ------------------------------Q6
// 6. Declare email variable and show in alert
var email = "abdullahshahalam2003@gmail.com";
alert("Q6\n"+"My email address is " + email);


// ------------------------------Q7
// 7. Declare book variable and display message
var book = "A smarter way to learn JavaScript  ";
alert("Q7\n"+"I am trying to learn from the book " + book);


// ------------------------------Q8
//8. Display in browser through JS
document.writeln("Q8\n"+"Yah! I can write HTML content through JavaScript<br>");


// ------------------------------Q9
// 9. Store string and show in alert and browser
var displayText = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬”";
alert("Q9\n"+displayText);
document.writeln("Q9\n"+displayText);






// **********************************CHAPTER 3******************
// Task 1: Display Age in Alert Box
let age = 22;
alert("I am " + age + " years old");

// Task 2: Track Website Visits
let visitCount = 14;
alert("You have visited this site " + visitCount + " times");

// Task 3: Display Birth Year and Data Type
let birthYear = 2003;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);// type of keyword tell us in JS whic tpe of data are in varalbe we have

// Task 4: Online Clothing Store Order
let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.write("<br><br>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");
//IS MEIN $  SE Variable Call kra hi  and usko string mein likhnee ka yahi method hi
// This Syntax shwo iin js to insert a value of varable or expressionm just to show the expression or varable use for this ${...} 
// also it requires Backticks (``) to use this syntax in js for $(...)
document.write(`<br><br>${visitorName} ordered ${quantity} ${productTitle}(s) on XYZ Clothing store`);
