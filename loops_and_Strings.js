//general loops are for, while and do while

//some special loops are below

//strings are immutable in js

//for of loop is used for arrays and strings
let str = prompt("Enter a string.");
let size = 0;
for (let i of str){
    console.log(i);
    size++;
}
let template_Literal = `You entered : ${str}`;        //template literals in js. They are also considered as strings
console.log(template_Literal); 

let trimmed_String = str.trim();           //remove the spaces from start and end of the string
console.log("After trimming the string: ",trimmed_String);

console.log("Size of string is :" , size);


//for in loop is used for objects
const student = {
    name: "Muhammad Tayyab",
    age: 21,
    interest: "Game Development"
}

for (let key in student){
    console.log(key,":",student[key]);
}