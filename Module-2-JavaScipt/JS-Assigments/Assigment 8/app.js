// //********************Chapter 21-25: ********************//

//---------------------Q1
document.write("<h2>Q1: Combine First & Last Name </h2>")
var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;
// var fullName = `${firstName} ${lastName}`; BACKLITERAL,  se direct join
// var fullName = [firstName, lastName].join(" "); // ARRAY JOIN,space ke saath merge
document.write("Hello " + fullName + "<br>");

//---------------------Q2
document.write("<h2>Q2: Length Of A Fvourite Mobile</h2>");
var mobile = prompt("Enter your favorite mobile phone model");
document.write("My favorite phone is: " + mobile + "<br>");
document.write("Length of string: " + mobile.length + "<br>");

//---------------------Q3
document.write("<h2>Q3: Index Of Letter 'N' in Pakistani</h2>");
var letter_N = "Pakistani";
var index_N = word1.indexOf("n");
document.write("String: " + letter_N + "<br>");
document.write("Index of 'n': " + index_N + "<br>");

//---------------------Q4
document.write("<h2>Q4: Index Of Letter 'l' in Hello World</h2>");
var word2 = "Hello World";
//Last index ka matlab hai:
// String me jitni bar "l" appear hua hai, uska last occurrence chahiye.
// Not counting from the end manually, bas position of the last "l" in the string chahiye.
var lastIndex = word2.lastIndexOf("l"); // Ye string me last occurrence ka index return karta hai.
document.write(`String: ${word2} <br>`);
document.write(`Last index of 'l': ${lastIndex} <br>`);

//---------------------Q5
document.write("<h2>Q5: Character at Index '3' in Pakistani</h2>");
var word3 = "Pakistani";
var charAt3 = word3.charAt(3);
document.write(`String: ${word3} <br>`);
document.write(`Character at index 3: " ${charAt3}<br>`);

//---------------------Q6
document.write("<h2>Q6: Merged Name Using Concate Method</h2>");
var firstName2 = prompt("Enter your First Name");
var lastName2 = prompt("Enter your Last Name");
var fullName2 = firstName2.concat(" ", lastName2);
document.write(`Welcome! ${fullName2}😊<br>`);

//---------------------Q7
document.write("<h2>Q7: Replace a String Using Replace Method </h2>");
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write(`City: ${city} <br>`);
document.write(`After Replacement: ${newCity}<br>`);

//---------------------Q8
document.write("<h2>Q8: Replace a String Using Replace Method </h2>");
var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&"); byy REGIXX METHOD, g for global search
var newMessage = message.replaceAll("and", "&");
document.write(`<h4>Message:</h4> ${message} <br>`);
document.write(`<h4>After Replacement:</h4>  ${newMessage} <br>`);

//---------------------Q9
document.write("<h2>Q9: Converts A String Into A Number</h2>");
var str = "472";
var num = Number(str);
// var num = +str;              // OTHER METHODS
// var num = parseInt(str);
document.write(`Value:  ${str}  (Type: ${typeof(str)} )<br>`);
document.write(`Value:  ${num}  (Type: ${typeof(num)} )<br>`);

//---------------------Q10
document.write("<h2>Q10: Converts Into Capital Letters.</h2>");
var userInput = prompt("Enter any text to convert in Capitalize");
var upperCase = userInput.toUpperCase();
document.write(`User Input: ${userInput} <br>`);
document.write(`Upper Case: ${upperCase} <br>`);
