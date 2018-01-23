//store html object 
var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField")

//get form
var form = document.getElementById("xIsWhatPercentOfY");

// event Listener with function. 
form.addEventListener("submit", function(event){
   
    
    // validation 
    if(!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        //convert string to numbers using parseFloat 
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        //math
        var result = x / y;
        var percent = result * 100;
        
        //print the result
        resultField.innerText = "Answer: " + percent + "%";
        
        //turn of auto refresh on click of sumbit
        event.preventDefault();
    }
    
});




//testing case
//numField1.value = "Test";
//resultField.innerText = "TEST2"