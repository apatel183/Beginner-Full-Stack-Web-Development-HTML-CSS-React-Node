
var students = [];

//object constructor 
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function(){
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
};
}

students.push(new Student ("Lalu", "Patel", 23));
students.push(new Student ("Jay", "Patel", 23));
students.push(new Student ("Keyur", "Patel", 23));

//for loop
for (var index = 0; index < students.length; index++){
    var student = students[index];
    console.log(student.greeting());
}

//for in loop not common .. 
//var student = students[0];
//for (var key in student){
//    console.log(student[key]);
//}

//// key and value 
//var student0 = {
//    firstName: "John",
//    lastName: "Parker",
//    age: 8,
//    
//    //inside of object we can create function
//    greeting: function(){
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//}
//};
////print 
//console.log(student0.greeting());
//
//
////creates a new empty object
//var student1 = new Object();
//student1.firstName = "Lalu";
//student1.lastName = "Patel"
//student1.age = 7;
//
//
////another different way we can do it
//var student2 = {};
//student2.firstName = "Keyur";
//student2.lastName = "Patel";
//student2.age = 23;
//
//
//
//var students = [];
//students.push(student0);
//students.push(student1);
//students.push(student2);


//using student as object we can get the info. using key and values is returned.
//console.log(student.firstName);
//console.log(student.lastName);
 

