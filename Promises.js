//Creating Promises

let data = new Promise((resolve, reject) => {
    console.log("It's a promise.\nPromise has three states:\n1)Pending\n2)Fulfilled\n3)Rejected");
    resolve("Promise resolved;")
})

console.log("Resolved Promise:", data);

let rejectPromise = new Promise((resolve,reject) =>{
    console.log("This is a rejected Promise.");
    reject("Rejected Promise");
})

console.log("Rejected Promise:",rejectPromise);

let pendingPromise = new Promise((resolve,reject) => {
    console.log("Not calling resolve or reject in the promise callback function will keep its state pending.");
})

console.log("Pending promise:", pendingPromise);

function getLength(str){
    console.log("You will get the length of the string after 5secs.")
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                const len = str.length;
                resolve("Length Calculated successfully.");
                console.log("Length:",len);
            }
            catch(e){
                console.log("Error Caught: ",e);
                reject("Your promise has been rejected due to some error.");
            }
        }, 5000);
    })
}


//How to use Promises

/*
If we want to perform an action when the promise is fulfilled, then <Promise>.then((res) => {...}) is used.
The callback funciton passed as an argument will be executed only when the promise is fulfilled.

"res" argument stores the value passed to resolve function
*/

/*
Similarly, if we want to perform an action when the promise is rejected, then <Promise>.catch((err)=>{...}) is used.
The callback funciton passed as an argument will be executed only when the promise is rejected.

"err" argument stores the values passed to reject funciton
*/

let p1 = new Promise((resolve,reject) => {
    resolve("Promise Resolved");
})

p1.then((res) => {
    console.log("p1 ", res);
})

let p2 = new Promise((resolve,reject) => {
    reject("Promise Rejected.");
})

p2.catch((err) => {
    console.log("p2 ",err);
})


//Promise chaining

//Promise chaining is used when we want a particular function to start executing after a promise is fullfilled

//There are three ways of doing data chaining. For demonstration, the same getLength function defined above is used

//1) First way of chaining

console.log("Calculating length for string1........");

let l1 = getLength("Some string for first promise");

l1.then((res) => {

    //if first promise is fulfilled, then second promise will be executed
    console.log("Now calculating length for string 2........")
    let l2 = getLength("Some string for second Promise");

})

//2) Second way of chaining

console.log("Calculating length for string1........");
getLength("Some string for first promise").then(() =>{

    console.log("Now calculating length for string 2........")
    getLength("Some String for second promise").then(()=>{

        console.log("Now calculating length for string 3........")
        getLength("Some string for third promise");
    })

});


//3) Third way of chaining

getLength("Some String").then(()=>{
    return getLength("Some string");
}).then(()=>{
    return getLength("Last String");
})