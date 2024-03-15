console.log("HELLO THIS IS FIRST JS CODE");

NULL_variable = null;       //its known whats inside varible, but is null
undefined_variable = undefined;  //its not known what's inside the variable

console.log(NULL_variable);
console.log(undefined_variable);


name = "Muhammad Tayyab";
age = 21;
isEmployeed = false;
$dollar = 53           //varibale name can start from a dollar

console.log(name);
console.log(age);
console.log("Is Employeed: " + isEmployeed);
console.log("$dollar:" + $dollar);


//varibles can also be declared using the below method (a good practice then the above one)


//"let" variables are block scoped

let fullName = "Muhammad Tayyab";       //can't be redeclared, but can be updated
console.log(fullName);    
fullName = "Tayyab";
console.log(fullName);

//"var" variables are gobal scoped

var totaL_Price = 500;        // can be redeclared and can be updated
console.log(totaL_Price);
var totaL_Price = 1000;          //total_price redeclared and will not give error
console.log(totaL_Price);

//"const" variables are also block scoped

const isWorking = true;
console.log(isWorking);

//isWorking = false;       //updating const variable, but error will come in console and not here
console.log(isWorking);   

//Some more code

let a; //value will be undefined and can be defined later in the scope
const b = "Its a constant"; //its must to declare and intialize a const varibale together 

console.log("Only Declared variable value: "+a);
console.log(b);


//Objects

const Developer = {
    Name: "Tayyab",            // key : value pairs
    age: "21",
    frameWork: "Django"
}

console.log("Developer Object:");
console.log(Developer);
console.log(Developer["Name"]);
console.log(Developer.Name);

Developer.frameWork = "Flask";           //const object's key can be updated
console.log("Developer Framework updated: "+Developer.frameWork);

// Developer ={                    //will throw error because const object "Develper" is being redeclared
//     hello: "hello"
// }
