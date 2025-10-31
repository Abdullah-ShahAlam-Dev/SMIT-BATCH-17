// ================================Method 1
// //IN this method we are using return statement to return the value from one function to another function
// function calculateTotal(subTotal, tax){
//         var result=subTotal+tax;
//         // console.log(result) iski need ni hai, bcz return se value jayeenge outside
//         return result
//     }      
//     // console.log(calculateTotal(45, 5))

//     function order(a,b){
//         var tOTAL_COST= calculateTotal(a,b)
//         console.log(`Your Order Total Cost Is: ${tOTAL_COST}`)
//         }
//         order(40,50)



// ================================Method 2

function calculateTotal(subTotal, tax) {
    var result = subTotal + tax;
    // PRINT REQUIRE FOR CHECKING RESULT VALUE, ELSE CALLING FUNTIONNN KO HI COSOLE MEIN CALL KREIN
    console.log(`Your Order Total Cost Is: ${result}`)

    // return result; ISKI NEED HI NHI YAHN PR
}

calculateTotal(45, 5)
calculateTotal(455, 5)
calculateTotal(51484, 5)
calculateTotal(484, 5)
//************************************************************* */
// // YA PHIR ALSO HM CALLING FUNCTIONS KO KSI VARAIBLE MEIN STORIEN KRWADEIN SO WE GET THE RESTURN VALUE AS WELL
// // LIKE THIS

// function calculateTotal (subTotal, tax) {
//     return subTotal + tax
// }

// let order1= calculateTotal(25, 25);
// let order2=calculateTotal(125, 25);
// let order3= calculateTotal(255, 25);

// console.log("Order 1-->",order1)
// console.log("Order 2-->",order2)
// console.log("Order 3-->",order3)
