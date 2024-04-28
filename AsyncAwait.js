function getlength(str){
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

// async is always used with a function
// async function always returns a promise by default

//await keyword is always used inside an asynchronouse function.
//await halts the execution of all the current async function running, until the promise is not fulfilled

//instead of using then and catch to get the results from promises, async and await can be used

async function findLength(){
    console.log("Calculating length 1.........");
    await getlength("I started programming with c++;"); //this will execute first, until promise not resolved 
    console.log("Calculating length 2.........");
    await getlength("Hello world");      //after the above promise is settled, then this will be called
}


