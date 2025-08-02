// -------------------------------VARIABLES
var Q2 = "Error! Please enter a valid password."
var Q3_msg1 ="Welcome to JS Land..."
var Q3_msg2 ="Happy Coding!"
var Q4_msg_checkbox ="\nPrevent this page from creating additional dialogs."



// ----------------------------------------Q1
// called an object window  method alert
  window.alert("Q1\n"+"Welcome to my website!");


  // ----------------------------------------Q2
alert("Q2\n"+Q2)


// ----------------------------------------Q3
alert("Q3\n"+Q3_msg1+"\n"+Q3_msg2)


// ----------------------------------------Q4
alert("Q4\n"+Q3_msg1)
alert("Q4\n"+Q3_msg2+Q4_msg_checkbox)



// ----------------------------------------Q5
console.log("Hello... I can run JS through my web browser's console");
 


// ----------------------------------------Q6
document.getElementById("showAlert").addEventListener("click", function () {
  alert("Q6\nButton clicked! This is an alert from your JS.");
});

