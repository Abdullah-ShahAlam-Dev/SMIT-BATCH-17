const score1=10
const score2=50
const score3=40

var totalscore,avgscore;
console.log(`The Score OF match 1: ${score1}\n`)
console.log(`The Score OF match 2: ${score2}\n`)
console.log(`The Score OF match 3: ${score3}\n`)
totalscore=score1+score2+score3;
console.log(`The Total Score OF All matches: ${totalscore}\n`)
avgscore=totalscore/3;
console.log(`The Average Score OF All matches: ${avgscore}\n`)

// ===================================================PART B =================================

var plates =20;
var people =7;

6. //Calculate the remaning plates after distributing equally among people
var remaning_plates=plates%people;//20 % 7=6

// 7. add one to remaining plates
remaning_plates++; // 6 + 1 = 7


// 8. create message variable and display... using string concatenation
const message = "There are " + remaning_plates + " plates available";
console.log(message);