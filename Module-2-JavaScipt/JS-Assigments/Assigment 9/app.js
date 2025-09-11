//********************Chapter 26-30: ********************//

//---------------------Q1
document.write("<h2>Q1: Positive Integer </h2>")
var num = +prompt("Enter a positive Number");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num) + "<br>");

//---------------------Q2
document.write("<h2>Q2: Negative Floating Point Number</h2>");
var neg_num = +prompt("Enter a negative floating point number:");
document.write("Number: " + neg_num + "<br>");
document.write("Round off value: " + Math.round(neg_num) + "<br>");
document.write("Floor value: " + Math.floor(neg_num) + "<br>");
document.write("Ceil value: " + Math.ceil(neg_num) + "<br>");

//---------------------Q3
document.write("<h2>Q3: Absolute Number</h2>");
var abs_num = +prompt("Enter a number for finding its absolute:");
document.write("The Absolute Value of "+abs_num+"  is: " + Math.abs(abs_num) + "<br>");

//---------------------Q4
document.write("<h2>Q4: Simulates A Dice</h2>\n Easy But Dustribution not fairs  3 4 5 6 call repeadly");
// Math.random() hamesha 0 (inclusive) se 1 (exclusive) ke beech value deta hai.
var dice = Math.floor(Math.random() * 10)+1// range ko hamesha 0 ki baad se star krna hu tw hm 1 add krtee hi
//  is se last no kilimit bhi 1 increase hujatee likeee  9 ki jghaa 10 tk jaana
if (dice > 6) {
    dice -= 4 // last digit 10  hi usko  3 4 5 6 mein convert dega  sequntially
    document.write(`Simulating A Dice: ${dice}`);
} else
    document.write(`Simulating A Dice: ${dice}`);

//  Method 2 : Correct 100%
var dice = Math.floor(Math.random() * 6) + 1;
document.write("<h2>Q4: Dice Value</h2>");
document.write("Random Dice Value: " + dice + "<hr>");


//---------------------Q5
document.write("<h2>Q5: Coin Toss</h2>");
var coin = Math.floor(Math.random() * 2) + 1; // 1 ya 2
var result;
if (coin === 1) {
    result = "Heads";
} else {
    result = "Tails";
}
document.write("Result: " + result + "<hr>");


// Method 2
var coin2 = Math.floor(Math.random() * 2) + 1;//ternary operatorm just check 1 condition so no else if
// condition ? valueIfTrue : valueIfFalse;
var result = (coin2 === 1) ? "Heads" : "Tails";
document.write("<h2>Q5: Coin Toss</h2>");
document.write("Result: " + result );

//---------------------Q6
var digits =100;
document.write("<h2>Q6: Random Number Between 1 to 100</h2>");
var random_Num = Math.floor(Math.random() * digits) + 1;
document.write("<h2>Q6: Random Number</h2>");
document.write("Random number (1–100): " + random_Num + "<hr>");


//---------------------Q7
document.write("<h2>Q7: Weight Of User</h2>");
var weightInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weight = parseFloat(weightInput);
document.write(`Your weight is:  ${weight}   kilograms<hr>`);



//---------------------Q8
document.write("<h2>Q8: Random Secret Number from 1 to 10</h2>");
var digits =10;
var num = +prompt("Enter a Random Secret Number between 1 to 10");
var result=Math.floor(Math.random()*digits)+1// +1 isleye kraki random 9.999 tk cjltaa tw 10 ki leye add 1 kra
if(num==result)
document.write(`Congradulates the user👍 You Hit the Secret Number! ${result}`);
else
document.write(`Try Again😒, You missed the Secret Number! ${result}`);
