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
document.writeln(`<br><br>Temperature in Fahrenheight is: ${temp_F} °F and in Fahrenheit is: ${c} °C`);



//------------------------Q7


//------------------------Q8
//------------------------Q9
//------------------------Q10
//------------------------Q4
//------------------------Q4
//------------------------Q4
//------------------------Q4
//------------------------Q4
//------------------------Q4
//------------------------Q4
// ************************************CHAPTER 6****************************