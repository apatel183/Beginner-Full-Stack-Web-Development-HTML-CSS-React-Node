//var length1 = 15;
//var width1 = 10;
//var area1 = length1 * width1;
//
//console.log(area1);
//
//var length2 = 12;
//var width2 = 14;
//var area2 = length2 * width2;
//
//console.log(area2);




//functions
function area(length, width){
    return length * width;
}

var rectanglesAreas = [];
rectanglesAreas.push(area(10,15));
rectanglesAreas.push(area(14,2));
rectanglesAreas.push(area(4,5));

console.log(rectanglesAreas);
//var area1 = area(10,15);
//console.log(area1);


//bank

var bankBalance = 500;

function makeTrasaction(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Sucessfull");
    } else {
        console.log("Insufficent Funds");
    }
}

console.log(bankBalance);
makeTrasaction(79.00);

console.log(bankBalance);
makeTrasaction(2.32);

console.log(bankBalance);
makeTrasaction(10.45);

console.log(bankBalance);
makeTrasaction(450.00);



// another way of doing it

var transaction = function(priceOfSale){
    if (priceOfSale <= bankBalance){
        bankBalance -= priceOfSale;
        console.log("Purchase Sucessfull");
    } else {
        console.log("Insufficent Funds");
    }
};

//var printCustomerName = function(first,last){
//    console.log("First Name: " + first + " Last Name: " + last);
//}
