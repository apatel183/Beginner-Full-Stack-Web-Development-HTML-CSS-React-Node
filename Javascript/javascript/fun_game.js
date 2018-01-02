
/*
Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print Code instead of the number and for the multiples of five print Monkey. For numbers which are multiples of both three and five print CodeMonkey
*/




// multipes of three it will print "CODE" 
// multipes of five it will print "Monkey"
// Both are multipes of three and five it will print "CODEMONKEY"
for (var x = 0; x < 101; x++){
    if ( x % 3 === 0 && x % 5 ===0){
        console.log("CodeMonkey");
    }else if ( x % 3 === 0){
        console.log("Code");
    } else if ( x % 5 === 0){
        console.log("Monkey");
    }else {
        console.log(x);
    }
}

//for (var index = 1; index < 101; index++) {
//
//// console.log(index);
//var num = index;
//if (num % 3 === 0 && num % 5 === 0) {
//console.log(num + " CodeMonkey");
//} else if (num % 3 === 0) {
//console.log(num + " Code");
//} else if (num % 5 === 0) {
//console.log(num + " Monkey");
//} else {
//console.log(num);
//}
//
//}