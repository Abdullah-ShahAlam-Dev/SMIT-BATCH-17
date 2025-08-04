// ************************************CHAPTER 4****************************


//-----------------------Q1
// // Declaration only (no value assigned)
// var x,y,z;


//------------------------Q2
//****LEGAL VARIABLES */
//--------Letters (a–z, A–Z),Numbers (but not at start)	
var variables1;    // ✅ starts with letter, uses number after = OK
var variables_2;   // ✅ underscore is allowed
var variables$3;   // ✅ Can contain _ or $ anywhere	
var $variables3;   // ✅ Can contain _ or $ anywhere	
let $price;        // ✅ starts with $, allowed
let my_var;        // ✅ letters and underscore = OK


//****LEGAL VARIABLES */
//---------NOT ALLOWED: Special characters like @, #, -, !, & all except _ & $.,Spaces, Keywords (var, let, if, etc(reserved keywords by JS).)
// let 1name;         // ❌ Starts with number/digit → illegal  
// let full Name;     // ❌ Contains space → illegal  
// let if;            // ❌ “if” is a **keyword** → illegal  
// let var;           // ❌ “var” is a **keyword** → illegal  
// let @user          // ❌ Not Allowed bcz  its totally wrong syntax also @ special chracter not allowed.  	
// let first-name     // ❌ also not allowed it minus operator in variable name.


//   \n (newline character)  does not work inside document.writeln() or document.write() in HTML, bcz those these are the methods that will write directly to the HTML document, not to the console or plain text output.
//--------------------------Q3 a)
document.writeln("<h2>Rules for naming JS variables</h2><br>")
//--------------------------Q3 b)
document.writeln("Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>")
//--------------------------Q3 c)
document.writeln("Variables must begin with a letter, $ or _. For example $name, _name or name<br>")
//--------------------------Q3 d)
document.writeln("Variable names are case sensitive<br>")
//--------------------------Q3 e)
document.writeln("Variable names should not be JS Keywords<br>")









// ************************************CHAPTER 5****************************
//------------------------Q1
var num1=3,num2=5;
document.writeln(`<br>Sum Of ${num1} and ${num2} is: ${num1+num2}`); 


//------------------------Q2
document.writeln(`<br>Subtraction Of ${num1} and ${num2} is: ${num1-num2}`); 
document.writeln(`<br>Multiplication Of ${num1} and ${num2} is: ${num1*num2}`); 
document.writeln(`<br>Division Of ${num1} and ${num2} is: ${num1/num2}`); 
//Modulus is order-sensitive: a % b ≠ b % a.
// here, 3 % 5 = 3, bcz 3 is smaller than  5 so divide kxh bhi nhi hua remaing kia bacha complete same raaha that was 3.
// in simple words,  divisor is always eqiuals or greater than divident wrna divide hi nhi huga.😊
document.writeln(`<br>Modulus Of ${num1} and ${num2} is: ${num1%num2}<br>`); // 3 divide by 5 


//------------------------Q3
//    a)
var x;
//    b)
document.writeln("<br>Value after variable declaration is: "+x)
//    c)
var x=16;
//    d)
document.writeln("<br>Initial Value: "+x);
//    e)
x++// ++x;
//    f)
document.writeln("<br>Value after increment is: "+x)
//    g)
x+=7;// x=x+7;
//    h)
document.writeln("<br>Value after addition of 7 is: "+x)

//    i)
x--// --x;

//    j)
document.writeln("<br>Value after decrement is: "+x)

//    k)
var remainder = x % 3;

//    l)
document.writeln(`<br>The Value "${x}" Divides by 3, The remainder is: ${x % 3}<br>`); 




//------------------------Q4
var ticketprice=600;
var quantity=5;
document.writeln(`<br><br>Total Cost to Buy ${quantity} Tickets to a Movie is:  ${ticketprice*quantity} PKR`);

//------------------------Q5
var t_number = 16;
document.writeln(`<br><br>Table of ${t_number} :<br>`);
for (var i = 1; i <= 10; i++) {
    document.writeln(` ${t_number} X ${i} = ${t_number*i}<br>`)
}
//------------------------Q6
var temp_C = 25;
var F = (temp_C * 9/ 5) + 32;  // celsius 2 fehrenheight
var temp_F = 70;
var c = (temp_F -32) * 5/ 9;  // fahrenheight 2 celsius
document.writeln(`<br><br>Temperature in Celsius is: ${temp_C} °C and in Fahrenheit is: ${F} °F`);
document.writeln(`<br><br>Temperature in Fahrenheight is: ${temp_F} °F and in Fahrenheit is: ${c} °C<br><br>`);



//------------------------Q7

var p_item1=650;
var p_item2=100;
var q_item1=3;
var q_item2=7;
var shiipingfee=100;
var totalcost = (p_item1*q_item1)+(p_item2*q_item2)+shiipingfee;
document.writeln(`<br><h2>Shopping Cart</h2>`)
document.write(`<br>Price of Item 1 is: ${p_item1}`);
document.write(`<br>Quantity of Item 1 is: ${q_item1}`);
document.write(`<br>Price of Item 2 is: ${p_item2}`);
document.write(`<br>Quantity of Item 2 is: ${q_item2}`);
document.write(`<br>Shipping Charges: ${shiipingfee}`);
document.writeln(`<br><br>Total Cost of Your Order is: ${totalcost} PKR<br><br>`);



//------------------------Q8
var total_marks =980;
var subject1 =402;
var subject2 =402;
var obtained_marks =subject1+subject2;
var Percentage = (obtained_marks / total_marks ) *100;
document.writeln(`<br><h2>Marks Sheet</h2>`)
document.writeln(`<br>Total marks: ${total_marks}`)
document.writeln(`<br>Marks Obtained: ${obtained_marks}`)
document.writeln(`<br>Percentage: ${Percentage}%<br><br>`)


//------------------------Q9
var us_dollar=10;
var saudi_riyals=25;
var total_currency_in_PKR = (us_dollar * 104.80) + (saudi_riyals * 28);
document.writeln(`<br><h2>Currency In PKR</h2>`)
document.writeln(`<br>Total Currency in PKR: ${total_currency_in_PKR}`)



//------------------------Q10
var y = 10;  
var result = ((y + 5) * 10) / 2;
document.writeln("<br>Result In a Single Expression: " + result);


//------------------------Q11
var current_year = 2025;
var birth_year = 2003;
var age= current_year-birth_year;
document.writeln(`<br><h2>Age Calculator</h2>`)
document.writeln(`<br>Current Year: ${current_year}`)
document.writeln(`<br>Birth Year: ${birth_year}`)
document.writeln(`<br>Your Age: ${age}<br><br>`)


//------------------------Q12
// b)
var radius = 5;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.writeln(`<br><h2>The Geometrizer</h2>`)
document.writeln("Radius of the circle is: " + radius + "<br>");
document.writeln("The circumference is: " + circumference + "<br>");
document.writeln("The area is: " + area+"<br><br>") ;




//------------------------Q13
// Q13
var favrtsnack = "Biscuits";
var currentAge = 22;
var maxAge = 50;
var snacksPerDay = 5;
var totalSnacks = (maxAge - currentAge) * 365 * snacksPerDay;

document.writeln(`<br><h2>The Lifetime Supply Calculator</h2>`)
document.writeln(`<br>Favourite Snack: ${favrtsnack}`)
document.writeln(`<br>Current Age: ${currentAge}`)
document.writeln(`<br>Estimated Maximum Age: ${maxAge}`)
document.writeln(`<br>Amount of Snacks per day: ${snacksPerDay}%`)
document.writeln("<br>You will need " + totalSnacks + " " + favrtsnack + " to last you until the ripe old age of " + maxAge + ".\n\n");









// ************************************CHAPTER 6****************************
//------------------------Q1

//------------------------Q2

//------------------------Q3

//------------------------Q4