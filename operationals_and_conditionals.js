let a  = 5;
let b = "5";

console.log("\"5\"==5 is" , a == b); //prints true , beacuse if a string contains only a number then first it will be converted to a number and then compared

console.log("\"5\"===5 is" , a === b); // prints false because === also compares the dataype (value && dataype)

console.log("\"5\"!==5 is" , a !== b);// prints true because if either the values or the data types are different, it returns true, otherwise false.

let cond1 = a === 8;  //false
let cond2 = 1000 <= 8 && b !== 3; //false && true = false
console.log("cond1" , cond1);
console.log("cond2 ", cond2);

if(a==5){
    console.log("a is equal to 5");
}else{
    console.log("a is not equal to 5");
}

let name  = "Muhammad Tayyab";
let userPrompt = prompt("Enter your name:");

if(name  === userPrompt){
    console.log("Name is strictly equal to sotred name.");
}else if(name !== userPrompt){
    console.log("Name is not strictly equal to stored name.");
}else{
    console.log("Nothing");
}

//ternary operator

let age = 18;
let cond = age > 18 ? "Adult" : "Not adult";  // cond ? true : false

console.log(cond);