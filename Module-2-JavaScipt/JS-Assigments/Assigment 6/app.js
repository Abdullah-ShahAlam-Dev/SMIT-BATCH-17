//********************************************************Chapter 15-17 Array 

//--------------------Q1
//A literal is a fixed value you write directly in your code — not computed, not stored in a variable name. It’s the raw value itself.

// 1. Literal notation (empty array)
var studentsLiteral = [];

// 2. Object notation (empty array)
var studentsObject = new Array();// isko constructor mein bhi use krtee

// 3. String array
var fruits = ["Apple", "Banana", "Cherry"];

// 4. Number array
var primeNumbers = [2, 3, 5, 7, 11];

// 5. Boolean array
var flags = [true, false, true];

// 6. Mixed array
var mixedData = ["Hello", 42, true, null];

// 7. Education Qualification
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//<li> ke bina koi numbering ya listing nahi hogi. <ol> ya <ul> apni numbering/tab tak banate hi tab hain jab unke andar <li> tags hon.
document.write("<h2>Q7: Qualifications:</h2>");
document.write("<ol>");
document.write("<li>" + qualifications[0] + "</li>");
document.write("<li>" + qualifications[1] + "</li>");
document.write("<li>" + qualifications[2] + "</li>");
document.write("<li>" + qualifications[3] + "</li>");
document.write("<li>" + qualifications[4] + "</li>");
document.write("<li>" + qualifications[5] + "</li>");
document.write("<li>" + qualifications[6] + "</li>");
document.write("<li>" + qualifications[7] + "</li>");
document.write("</ol>");

// document.write("<h2>Qualifications:</h2>");
// document.write(
//   "<ol>" +
//     "<li>" + qualifications[0] + "</li>" +
//     "<li>" + qualifications[1] + "</li>" +
//     "<li>" + qualifications[2] + "</li>" +
//     "<li>" + qualifications[3] + "</li>" +
//     "<li>" + qualifications[4] + "</li>" +
//     "<li>" + qualifications[5] + "</li>" +
//     "<li>" + qualifications[6] + "</li>" +
//     "<li>" + qualifications[7] + "</li>" +
//   "</ol>"
// );




// 8. Education Qualification
//--------------------Q8
document.write("<h2>Q8: Scores Of Students:</h2>");
var students = ["Abdullah", "Ayesha", "Mustufa"];
var scores = [400, 350, 480];
var totalMarks = 500;
document.write(`Score of ${students[0]} is ${scores[0]}. → ${(scores[0] / totalMarks) * 100}%<br>`);
document.write(`Score of ${students[1]} is ${scores[1]}. → ${(scores[1] / totalMarks) * 100}%<br>`);
document.write(`Score of ${students[2]} is ${scores[2]}. → ${(scores[2] / totalMarks) * 100}%<br>`);



//--------------------Q9

// i uses .join for add sapce after comma

document.write("<h2>Q9: Colors</h2>");
// Initialize array
var colors = ["Blue", "Pink", "Yellow", "Red"]
document.write("Initial Colors: " + colors.join(", ") + "<br><br>");

// a. Add color to beginning
var newColorStart = prompt("Add a color to the beginning:");
colors.unshift(newColorStart);
document.write("<b>a)<br></b>After adding to beginning: " + colors.join(", ") + "<br>");

// b. Add color to end
var newColorEnd = prompt("Add a color to the end:");
colors.push(newColorEnd);
document.write("<b>b)<br></b>After adding to end: " + colors.join(", ") + "<br>");

// c. Add two more colors to beginning
colors.unshift("Black", "Orange");
document.write("<b>c)<br></b>After adding two more to beginning: " + colors.join(", ") + "<br>");

// d. Delete first color
colors.shift();
document.write("<b>d)<br></b>After deleting first color: " + colors.join(", ") + "<br>");

// e. Delete last color
colors.pop();
document.write("<b>e)<br></b>After deleting last color: " + colors.join(", ") + "<br>");

// f. Add color at specific index
var indexToAdd = parseInt(prompt("Enter index to add a color:"));
var colorName = prompt("Enter the color name to add:");
colors.splice(indexToAdd, 0, colorName);
document.write("<b>f)<br></b>After adding color at index " + indexToAdd + ": " + colors.join(", ") + "<br>");

// g. Delete color(s) from specific index
var indexToDelete = parseInt(prompt("Enter index to delete color(s) from:"));
var countToDelete = parseInt(prompt("How many colors to delete?"));
colors.splice(indexToDelete, countToDelete);
document.write("<b>g)<br></b>After deleting color(s): " + colors.join(", ") + "<br>");
document.write("<b>g)<br></b>After deleting color(s): " + colors + "<br>");




//--------------------Q10
document.write("<h2>Q10: Array's Sorting Method. </h2>");
//---Array sorting method, study baad mein



//--------------------Q11
document.write("<h2>Q11: Copy 3 Array Elements.</h2>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.writeln(`Cities List: <br> ${cities} <br> Selected Cities: <br> ${selectedCities}`);


//--------------------Q12
//----To join a array using .join property
document.write("<h2>Q12: Merged Array Elements.</h2>");
var arr = ["This ", "is ", " my ", " cat"];
var mergedArr = arr.join(" "); // Output: This is my cat
document.writeln(`Array:<br> ${arr}<br>String:<br> ${mergedArr}<br><br>`);


//--------------------Q13
document.write("<h2>Q13: FIFO(First In First Out).</h2>");
//ther is only 2 possible condition for FIFo
// push + shift → (add right, remove left)
// unshift + pop → (add left, remove right)
// first in first out means  unsift se add on start , then pop


// var FIFO = [];                        // Wrong Approch
// FIFO.unshift("Keyboard");
// document.writeln(FIFO+"<br><br>");
// FIFO.unshift("Monitor");
// document.writeln(FIFO+"<br><br>");
// FIFO.unshift("Mouse");
// document.writeln(FIFO+"<br><br>");
// FIFO.unshift("Printer");
// document.writeln(FIFO+"<br><br>");
// var FIFO = [];
// FIFO.push("Keyboard");
// FIFO.push("Mouse");
// FIFO.push("Monitor");
// FIFO.push("Printer");

var FIFO = [];
FIFO.push("Keyboard");
document.writeln("<b>After Adding:</b>" + FIFO + "<br>");
FIFO.push("Monitor");
document.writeln("<b>After Adding:</b>" + FIFO + "<br>");
FIFO.push("Mouse");
document.writeln("<b>After Adding:</b>" + FIFO + "<br>");
FIFO.push("Printer");
document.writeln("<b>After Adding:</b>" + FIFO + "<br>");

document.writeln("<b><br>Devices:<br>" + FIFO + "<br><br></b>");

document.write("<b>Out:</b> <br>" + FIFO.shift() + "<br>");
document.write("<b>Out:</b> <br>" + FIFO.shift() + "<br>");
document.write("<b>Out:</b> <br>" + FIFO.shift() + "<br>");
document.write("<b>Out:</b> <br>" + FIFO.shift() + "<br>");





//--------------------Q14
// lifo like a stack memory jo end mein aya usko pehleee nikaal doo means one/same direction for add/exit
// 2 possible means simlple
//push, pop
//unshift, shift

document.write("<h2>Q14: LIFO(Last In First Out).</h2>");
var LIFO = [];
LIFO.push("Keyboard");
document.writeln("<b>After Adding:</b>" + LIFO + "<br>");
LIFO.push("Mouse");
document.writeln("<b>After Adding:</b>" + LIFO + "<br>");
LIFO.push("Printer");
document.writeln("<b>After Adding:</b>" + LIFO + "<br>");
LIFO.push("Monitor");
document.writeln("<b>After Adding:</b>" + LIFO + "<br>");

document.write("Devices:<br>" + LIFO + "<br><br>");

document.write("Out: <br>" + LIFO.pop() + "<br>");
document.write("Out: <br>" + LIFO.pop() + "<br>");
document.write("Out: <br>" + LIFO.pop() + "<br>");
document.write("Out: <br>" + LIFO.pop() + "<br>");



//--------------------Q15
document.write("<h2>Q15: Dropdown In JS</h2>");
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln(`Array Values: ${manufacturers} <br> <select><option> ${manufacturers[0]} </option><option> ${manufacturers[1]} </option><option> ${manufacturers[2]} </option><option> ${manufacturers[3]} </option><option> ${manufacturers[4]} </option><option> ${manufacturers[5]} </option></select>`);

// document.write("<hr><h1>END OF CHAPTER 15 to 17 (Books)</h1><br>Thank you 😉");// only variablbe need concatenation ot a elment or tag

