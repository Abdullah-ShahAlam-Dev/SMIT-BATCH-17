
// -----------------------Q1
var city = prompt("Enter your city name:");
if (city === "Karachi") {
    document.writeln("Q1<br>Welcome to city of lights");
}



//-----------------------Q2
var gender = prompt("Enter your Gender", "Male OR Female")
var message = "Not Match 😑, Please Enter a Correct Gender Either 'Male' or 'Female'";

if (gender === "Male") {
    message = "Good Morning Sir."
}

if (gender === "Female") {
    message = "Good Morning Ma’am."
}
alert(message)



//-----------------------Q3
var signal_color = prompt ("Enter the color of traffic signal", "Red OR Green OR Yellow");
var message = "Not Match 😑, Please Enter a Correct Signal Color Either 'Red' Either 'Yelllow' or 'Green'";

if(signal_color==="Red"){
    message="Signal Color is Red:"
    document.writeln("<br><br>Must Stop!")
}
if(signal_color==="Yellow"){
    message="Signal Color is Yellow:"
    document.writeln("<br><br>Ready to move")
}
if(signal_color==="Green"){
    message="Signal Color is Green:"
    document.writeln("<br><br>Move Now😊")
}
alert(message)



// -----------------------Q4
// simple method no extra features.
var fuel = prompt("Enter remaining fuel (only number, in litres):");
if (fuel < 0.25) {
   alert("Please refill the fuel in your car");
}

//now i will add some extra features, take string and number input at one go.
var input = prompt("Enter quantity and unit for remaining fuel in your car(e.g. '5 Liters')");

var parts = input.split(" ");//  ["5", "Liters"]
// use predefined Split fenction by "space" and result make this in a array form and store here in parts variable

// First part is number, second is unit
var quantity = parseFloat(parts[0]);  // "5" → 5,here converting string to float
var unit = parts[1];      // "Liters"

if (quantity < 0.25) {
  if (unit === "Liters") {
    alert("Please refill the fuel in your car");

  }
}
if (quantity < 0.25) {
  if (unit !== "Liters") { //!== tab true return karega agar value ya datatype me se koi bhi ek different ho — dono alag hone zaroori nahi.
    alert("Input does not match required condition.");
    alert("Please Enter a  Unit in 'Liters'");
  }
}
if (quantity > 0.25) {
  if (unit !== "Liters") { //!== tab true return karega agar value ya datatype me se koi bhi ek different ho — dono alag hone zaroori nahi.
    alert("Input does not match required condition.");
    alert("Please Enter a  Unit in 'Liters'");
  }
}

if (quantity > 0.25) {
  if (unit === "Liters") { //!== tab true return karega agar value ya datatype me se koi bhi ek different ho — dono alag hone zaroori nahi.
    alert("You have Good Fuel in your car, Enjoy the Ride.😊");
  }
}



//-----------------------Q5
//a.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//b.
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c.
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}

if (false){
alert("False");
}

// f. 
if("car" < "cat"){
alert("car is smaller than cat");
}

document.writeln("<h3><br>Q5:OUTPUT ANALYZED</h3>a true" +
  "b false<br>" +
  "c condition 1 false<br>" +
  "c condition 2 true<br>" +
  "c condition 3 false<br>" +
  "c condition 4 true<br>" +
  "d true<br>" +
  "e condition 1 true<br>" +
  "e condition 2 false<br>" +
  "f true<br>"
);


// //-----------------------Q6
var subject1 = parseFloat(prompt("Marks in Subject 1:"));
var subject2 = parseFloat(prompt("Marks in Subject 2:"));
var subject3 = parseFloat(prompt("Marks in Subject 3:"));
var totalMarks = parseFloat(prompt("Total Marks (e.g., 300):"));

var obtained = subject1 + subject2 + subject3;
var percentage = (obtained / totalMarks) * 100;

var grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
if (percentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}
document.writeln("<h3>Q6: <br> Marks Sheet </h3>");
document.write("<p><strong>Total Marks:</strong> " + totalMarks + "</p>");
document.write("<p><strong>Marks Obtained:</strong>" + obtained + "</p>");
document.write("<p><strong>Percentage:</strong> " + percentage.toFixed(2) + "%</p>");
document.write("<p><strong>Grade:</strong> " + grade + "</p>");
document.write("<p><strong>Remarks:</strong> " + remarks + "</p>");


// //-----------------------Q7
var secretNumber = 5;
var userGuess = +prompt("Guess the secret number (1 to 10):");

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
}

if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
}

if (userGuess !== secretNumber) {
    if (userGuess + 1 !== secretNumber) {
        alert("Wrong guess. Try again!");
    }
}


// //-----------------------Q8
var num8 = +prompt("Q8: Enter a number to check if divisible by 3:");
document.write("<h3>Q8: Divisible by 3</h3>");
if (num8 % 3 === 0) {
    document.write("The number " + num8 + " is divisible by 3.<br>");
}
if (num8 % 3 !== 0) {
    document.write("The number " + num8 + " is NOT divisible by 3.<br>");
}


// //-----------------------Q9
var num9 = +prompt("Q9: Enter a number to check if even or odd:");
document.writeln("<h3>Q9: Even or Odd</h3>");

if (num9 % 2 === 0) {
  alert("The number " + num9 + " is Even.");
  document.writeln("The number " + num9 + " is Even.<br>");
}
if (num9 % 2 !== 0) {
  alert("The number " + num9 + " is Odd.");
  document.writeln("The number " + num9 + " is Odd.<br>");
}




// //-----------------------Q10
var temp = +prompt("Q10: Enter temperature:");
document.writeln("<h3>Q10: Temperature Messages</h3>");

if (temp > 40) {
  alert("It is too hot outside.");
  document.writeln("It is too hot outside.<br>");
}
if (temp <= 40) {
  if (temp > 30) {
    alert("The Weather today is Normal.");
    document.writeln("The Weather today is Normal.<br>");
  }
}
if (temp <= 30) {
  if (temp > 20) {
    alert("Today’s Weather is cool.");
    document.writeln("Today’s Weather is cool.<br>");
  }
}
if (temp <= 20) {
  if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
    document.writeln("OMG! Today’s weather is so Cool.<br>");
  }
}



// //-----------------------Q11
var num1 = +prompt("Q11: Enter first number:");
var num2 = +prompt("Q11: Enter second number:");
var op = prompt("Q11: Enter operation (+, -, *, /, %):");

document.writeln("<h3>Q11: Simple Calculator</h3>");
if (op === "+") {
  alert("Result: " + (num1 + num2));
  document.writeln("Result Of " +num1+ " + "+num2+ "is: "+ (num1 + num2) + "<br>");
}
if (op === "-") {
  alert("Result: " + (num1 - num2));
  document.writeln("Result Of " +num1+ " - "+num2+ "is: "+(num1 - num2) + "<br>");
}
if (op === "*") {
  alert("Result: " + (num1 * num2));
  document.writeln("Result Of " +num1+ " * "+num2+ "is: "+(num1 * num2) + "<br>");
}
if (op === "/") {
  alert("Result: " + (num1 / num2));
  document.writeln("Result Of " +num1+ " / "+num2+ "is: "+(num1 / num2) + "<br>");
}
if (op === "%") {
  alert("Result: " + (num1 % num2));
  document.writeln("Result Of " +num1+ " % "+num2+ "is: "+(num1 % num2) + "<br>");
}