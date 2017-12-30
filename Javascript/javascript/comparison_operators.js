
// == equal to 
// ===
// <= less than or equal to
// >= greater than or equal to
// !== not 

var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;
if (nikeSBShoes <= myAccountBalance) {
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes - coupon <= myAccountBalance){
    console.log("we just bought some dope shoes with a coupon!");
    myAccountBalance -=nikeSBShoes - coupon;
    console.log("Account Balance: " + myAccountBalance);
} 
else {
    console.log("You do not have enough money in the account to buy this shoes!")
}


var val1 = 23;
var val2 = "23";

if(val1 !== val2) {
    console.log("these are not the same!")
}
else{
    console.log("One of these IS like the other....");
}