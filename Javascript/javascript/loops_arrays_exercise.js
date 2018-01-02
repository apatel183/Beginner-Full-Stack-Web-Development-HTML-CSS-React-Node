
//
//var numbers = 15;
//for (var x = 0; x < numbers; x++){
//    console.log(x);
//}


//odd and even excerise 

for (var x = 0; x <= 15; x++){
    if (x == 0){
        console.log(x + " is even");
    }
    else if (x % 2 == 0){
        console.log(x +  " is even");
    }
    else{
        console.log(x +  " is odd");
    }
}

/*
Using loops, create a Javascript program that prints out the following:
*  
* *  
* * *  
* * * *  
* * * * * 
*/

var star = "";

for (var x = 0; x < 5; x++){
    console.log(star += "*");
}



