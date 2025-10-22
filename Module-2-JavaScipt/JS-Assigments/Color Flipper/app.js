var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
var colorname = document.querySelector(".color-name");
// jitneee color ki hash code mila wo hi yee , sb ki exacts nhi hutee name  
var namedColors = {
  "#FF0000": "Red",
  "#00FF00": "Lime",
  "#0000FF": "Blue",
  "#FFFF00": "Yellow",
  "#FFA500": "Orange",
  "#800080": "Purple",
  "#000000": "Black",
  "#FFFFFF": "White",
  "#808080": "Gray",
  "#FFC0CB": "Pink",
  "#A52A2A": "Brown",
  "#008000": "Green",
  "#00FFFF": "Cyan",
  "#FFD700": "Gold"
};


btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i=0 ; i<6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

     // color name jo match hunge wo aynge
    let upperHex = hexColor.toUpperCase();
    if (namedColors[upperHex]) {
        colorname.textContent = namedColors[upperHex];
    } else {
        colorname.textContent = "Custom Color";
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}