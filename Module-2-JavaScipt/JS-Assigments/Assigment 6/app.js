//********************Chapter 15-17 Array 

//--------------------Q1
//A literal is a fixed value you write directly in your code — not computed, not stored in a variable name. It’s the raw value itself.

// 1. Literal notation (empty array)
let studentsLiteral = [];

// 2. Object notation (empty array)
let studentsObject = new Array();// isko constructor mein bhi use krtee

// 3. String array
let fruits = ["Apple", "Banana", "Cherry"];

// 4. Number array
let primeNumbers = [2, 3, 5, 7, 11];

// 5. Boolean array
let flags = [true, false, true];

// 6. Mixed array
let mixedData = ["Hello", 42, true, null];

// 7. Education Qualification
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
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
let students = ["Abdullah", "Ayesha", "Sara"];
let scores = [400, 350, 480];
let totalMarks = 500;
document.write(`Score of ${students[0]} is ${scores[0]}. → ${(scores[0]/totalMarks)*100}%<br>`);
document.write(`Score of ${students[1]} is ${scores[1]}. → ${(scores[1]/totalMarks)*100}%<br>`);
document.write(`Score of ${students[2]} is ${scores[2]}. → ${(scores[2]/totalMarks)*100}%<br>`);



//--------------------Q




//--------------------Q11
document.write("<h2>Q10: Copy 3 Array Elements.</h2>");
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(1, 4);
document.writeln(`Cities List: <br> ${cities} <br> Selected Cities: <br> ${selectedCities}`);


//--------------------Q
//--------------------Q
//--------------------Q
//--------------------Q
//--------------------Q
//--------------------Q
//--------------------Q
