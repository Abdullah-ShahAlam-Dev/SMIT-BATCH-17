//********************Chapter 35-38: ********************//

//---------------------Q1
//FUNCTIONS

// Q1: Current Date & Time
document.write("<h2>Q1: Current Date & Time</h2>");
function showDateTime() {
  var now = new Date();
  document.write("Current Date & Time: " + now + "<br>");
}
showDateTime();

// Q2: Greeting with Full Name
document.write("<h2>Q2: Greeting</h2>");
function greet(first, last) {
  var full = first + " " + last;
  document.write("Hello " + full + "!<br>");
}
greet(prompt("Enter First Name:"), prompt("Enter Last Name:"));

// Q3: Sum of Two Numbers
document.write("<h2>Q3: Sum</h2>");
function add(a, b) {
  return a + b;
}
var n1 = +prompt("Enter first number:");
var n2 = +prompt("Enter second number:");
document.write("Sum: " + add(n1, n2) + "<br>");

// Q4: Calculator
document.write("<h2>Q4: Calculator</h2>");
function calculator(num1, num2, op) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num1 - num2;
  if (op === "*") return num1 * num2;
  if (op === "/") return num1 / num2;
  return "Invalid Operator";
}
var c1 = +prompt("Enter first number:");
var c2 = +prompt("Enter second number:");
var op = prompt("Enter operator (+,-,*,/):");
document.write("Result: " + calculator(c1, c2, op) + "<br>");

// Q5: Square
document.write("<h2>Q5: Square</h2>");
function square(x) {
  return x * x;
}
var sq = +prompt("Enter number to square:");
document.write("Square: " + square(sq) + "<br>");

// Q6: Factorial
document.write("<h2>Q6: Factorial</h2>");
function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
var fact = +prompt("Enter number for factorial:");
document.write("Factorial: " + factorial(fact) + "<br>");

// Q7: Counting
document.write("<h2>Q7: Counting</h2>");
function counting(start, end) {
  for (var i = start; i <= end; i++) {
    document.write(i + " ");
  }
}
var s = +prompt("Enter start number:");
var e = +prompt("Enter end number:");
counting(s, e);
document.write("<br>");

// Q8: Hypotenuse
document.write("<h2>Q8: Hypotenuse</h2>");
function calculateHypotenuse(base, perp) {
  function square(n) {
    return n * n;
  }
  return Math.sqrt(square(base) + square(perp));
}
var b = +prompt("Enter base:");
var p = +prompt("Enter perpendicular:");
document.write("Hypotenuse: " + calculateHypotenuse(b, p) + "<br>");

// Q9: Rectangle Area
document.write("<h2>Q9: Rectangle Area</h2>");
function area(width, height) {
  return width * height;
}
document.write("By values: " + area(5, 10) + "<br>");
var w = 6, h = 4;
document.write("By variables: " + area(w, h) + "<br>");

// Q10: Palindrome
document.write("<h2>Q10: Palindrome</h2>");
function isPalindrome(str) {
  var rev = str.split("").reverse().join("");
  return str === rev;
}
var word = prompt("Enter word:");
document.write("Palindrome? " + isPalindrome(word) + "<br>");

// Q11: Capitalize Words
document.write("<h2>Q11: Capitalize Words</h2>");
function capitalizeWords(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
var sentence = prompt("Enter a sentence:");
document.write("Result: " + capitalizeWords(sentence) + "<br>");

// Q12: Longest Word
document.write("<h2>Q12: Longest Word</h2>");
function longestWord(str) {
  var words = str.split(" ");
  var max = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > max.length) max = words[i];
  }
  return max;
}
var st = prompt("Enter a sentence:");
document.write("Longest Word: " + longestWord(st) + "<br>");

// Q13: Count Letter Occurrences
document.write("<h2>Q13: Letter Count</h2>");
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) count++;
  }
  return count;
}
var str1 = prompt("Enter a string:");
var letter = prompt("Enter letter to count:");
document.write("Occurrences of '" + letter + "': " + countLetter(str1, letter) + "<br>");

// Q14: Circle Properties
document.write("<h2>Q14: Circle Properties</h2>");
function calcCircumference(r) {
  return 2 * Math.PI * r;
}
function calcArea(r) {
  return Math.PI * r * r;
}
var r = +prompt("Enter radius:");
document.write("Circumference: " + calcCircumference(r) + "<br>");
document.write("Area: " + calcArea(r) + "<br>");

