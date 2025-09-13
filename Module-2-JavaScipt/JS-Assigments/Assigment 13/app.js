//********************Chapter 39-44********************//

//---------------------Q1

// Assignment #38-44
// FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS

// Q1: Power Function
document.write("<h2>Q1: Power Function</h2>");
function power(a, b) {
  return a ** b;
}
document.write(`2 raised to 3 is: ${power(2, 3)} <br>`);

// Q2: Leap Year
document.write("<h2>Q2: Leap Year</h2>");
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
document.write(`2024 is leap year? ${isLeapYear(2024)} <br>`);

// Q3: Area of Triangle
document.write("<h2>Q3: Area of Triangle</h2>");
function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function areaOfTriangle(a, b, c) {
  let S = semiPerimeter(a, b, c);
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
document.write(`Area of triangle with sides 3, 4, 5: ${areaOfTriangle(3, 4, 5)} <br>`);

// Q4: Average and Percentage
document.write("<h2>Q4: Average and Percentage</h2>");
function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
  let total = m1 + m2 + m3;
  return (total / 300) * 100;
}
function mainFunction(m1, m2, m3) {
  let avg = average(m1, m2, m3);
  let perc = percentage(m1, m2, m3);
  document.write(`Average: ${avg} <br>`);
  document.write(`Percentage: ${perc}% <br>`);
}
mainFunction(85, 90, 95);

// Q5: Custom indexOf
document.write("<h2>Q5: Custom indexOf</h2>");
function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}
document.write(`Index of 'l' in Hello: ${customIndexOf("Hello", "l")} <br>`);

// Q6: Remove Vowels
document.write("<h2>Q6: Remove Vowels</h2>");
function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, "");
}
document.write(`Without vowels: ${removeVowels("Hello World")} <br>`);

// Q7: Two Vowels in Succession
document.write("<h2>Q7: Two Vowels in Succession</h2>");
function countVowelPairs(text) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length - 1; i++) {
    if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
      count++;
    }
  }
  return count;
}
document.write(`Occurrences: ${countVowelPairs("Pleases read this application and give me gratuity")} <br>`);

// Q8: Distance Conversion
document.write("<h2>Q8: Distance Conversion</h2>");
function toMeters(km) {
  return km * 1000;
}
function toFeet(km) {
  return km * 3280.84;
}
function toInches(km) {
  return km * 39370.1;
}
function toCentimeters(km) {
  return km * 100000;
}
let distance = 5;
document.write(`${distance} km in meters: ${toMeters(distance)} <br>`);
document.write(`${distance} km in feet: ${toFeet(distance)} <br>`);
document.write(`${distance} km in inches: ${toInches(distance)} <br>`);
document.write(`${distance} km in cm: ${toCentimeters(distance)} <br>`);

// Q9: Overtime Pay
document.write("<h2>Q9: Overtime Pay</h2>");
function overtimePay(hours) {
  if (hours > 40) {
    return (hours - 40) * 12;
  } else {
    return 0;
  }
}
document.write(`Overtime pay for 45 hours: Rs.${overtimePay(45)} <br>`);

// Q10: Cashier Notes
document.write("<h2>Q10: Cashier Notes</h2>");
function cashierNotes(amount) {
  let hundreds = Math.floor(amount / 100);
  let fifties = Math.floor((amount % 100) / 50);
  let tens = Math.floor(((amount % 100) % 50) / 10);
  document.write(`Hundreds: ${hundreds}, Fifties: ${fifties}, Tens: ${tens} <br>`);
}
cashierNotes(880);