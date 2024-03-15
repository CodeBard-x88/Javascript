function sum(a,b){
    return a+b;
}


//arrow function of sum

const arrow_Sum = (a,b) =>{
    return a + b;
}

console.log(arrow_Sum);


//call back functions  = functions passed as an argument ot another function

let a = [1,2,3,4,5,6];

//by default callback function can take 3 inputs for an array in this order: value, index, array
//Any name can be assigned to these arguments

a.forEach(function printVal(val, index, arr){      //printVal is now a callback function, forEach is a higher order function here
    console.log(val, index, arr);
})

//Higher order functions are those which either take a function as an argument or return a function

let sum_  = a.reduce((res,cur)=>{       
    return res + cur;
})

console.log(sum_);