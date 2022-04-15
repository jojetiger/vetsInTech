// let drivingAge = 16;
// let age = 15;
// let parentalConsent = true;

// if (age >=drivingAge || (age === 15 && parentalConsent === true)) {
//     console.log("You are old enough to drive");
// } else{
//     console.log("You can't drive");
// }

//calculator

let tipRate = .20;
let tax = .08;

let tipCalculator = function(billAmount, tipPercent) {
    console.log('bill amount', billAmount)
    console.log('tip percent', tipPercent)
    let tipAmount = billAmount * (tipPercent / 100)
    console.log(tipAmount)
    let taxAmount = billAmount * tax
    console.log(taxAmount)
    let totalBill = billAmount + tipAmount + taxAmount
    console.log('your total bill is:$', totalBill)
 
}

tipCalculator(25.00, 20)



