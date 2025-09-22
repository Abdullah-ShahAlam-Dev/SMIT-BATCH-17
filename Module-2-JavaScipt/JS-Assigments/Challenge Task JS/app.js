var ans = 7;
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === ans) {
    alert("'" + guess + "'Bingo! you ccorrect the secrect number🎯😍");
}

else if (guess + 1 === ans) {
    alert("'" + guess + "'Bas ek step door ho 👍");
}
else if (guess + 2 === ans) {
    alert("'" + guess + "'qareeb ho rahe ho 👌");
}
else if (guess + 3 === ans) {
    alert("'" + guess + "'thoda sa or try karo👌");
}
else if (guess + 4 === ans) {
    alert("'" + guess + "'Bhia tera Guess World Tour kr ki aya hi ar try krta reh🤣\n Universe ghom lega");
}
else if (guess + 5 === ans) {
    alert("'" + guess + "'Thodaa sa Better GUess KR 🤔");
}
else if (guess + 6 === ans) {
    alert("'" + guess + "'BbHAI THORDAAA TW SAHI GUESS JRR THODAA😒");
}
else if (guess - 1 === ans) {
    alert("'" + guess + "'Bhaiyaaa missed krdeya tumne peechye 😒");
}
else if (guess - 2 === ans) {
    alert("'" + guess + "'low guess hai 😒");
}
else if (guess - 3 === ans) {
    alert("'" + guess + "'Bhaiyaa Bhoot Door hu 😒");
}
else if (guess > 10) {
    alert("'" + guess + "'Bhaiyaa  lIMIT MEIN REH 10 KI ANDR REH 😡");
}

else {
    alert("Wrong guess. Try again! \n POSITIVE Number Daal 🙄");
}
