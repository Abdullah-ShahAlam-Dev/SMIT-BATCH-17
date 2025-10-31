// =============================================================PRoblem 5 Solved


// var a,b;

function findmax(a, b) {
    if (a == b) {
        console.log(`Both Numbers Are Same: ${a}`)
        //    return a
    }
    else if (a > b) {
        console.log(`A is Greater than B: ${a}`)
        // return a
    }
    else {
        console.log(`B is Greater than A: ${b}`)
        // return b        
    }
}
// return ka kaama variable ki zryeee current scope se bahaar nikalna hi (E.g let local scope hi usko  function se  
// xbhaar lane ki leyeee return use huga) 

// var a=findmax(6,5)
// console.log(a)


findmax(6, 5)



// =============================================================PRoblem 6 Solved

// var final_password= ""; This is Wrong Declaration , here other wise it dont empty the previosu values
function generatepass() {
    
    
    const chars_captial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chars_small = chars_captial.toLowerCase();
    const special = ""
    
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*_"
    
    
    // var final_password= "";
    var result="";
    for (var i = 0; i <= 8; i++) {
            var result = Math.floor(Math.random() * str.length)

            // console.log("CAPITAL RANDOM==>>" + result  )

            result += str[result];
        }
        
        console.log(result)
    }



// function generatePass () {
//     console.log("han bhai chl raha hai -->");

//     let pass = ""
//     let str = "sfdhJAKL;AGJKL;;GUJK78451207845@#$%^&*("
//     // console.log(str[2]);

//     for (let i = 0; i < 8; i++) {
//         let randomNum = Math.floor(Math.random() * str.length)      

//         // console.log(randomNum); 

//         pass = pass + str[randomNum]
//         console.log(    "pass   --->",pass);

        
        
//     }
// }


// generatePass ()         