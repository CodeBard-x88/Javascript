let btn1 = document.querySelector("#btn1")
btn1.onclick = (e) =>{                   //e is a special object that have details of the event

    //Each event handler have access to events object's methods and properties
    console.log(e);
    let a = 25;
    a++;
    console.log(a);
}

btn1.onclick= () =>{
    console.log("HANDLER 2")              // this will over write the above defined event handler
}

//Draw back of above method of adding event listener is that if you want to define more than one event listeners, then writing another event listener for the same object will over write the previous one


//To overcome this problem, js provides addEventListener functionality which enables us to add more than onve event handlers for the same event on same node

let btn2 = window.document.querySelector("#btn2");

const handler1 =  () =>{
    console.log("Handler 1 called on onclick event")
}

const handler2 = () =>{
    console.log("Handler 2 called on onclick event.")
}

btn2.addEventListener("click", handler1)         // args : event name, callback function
btn2.addEventListener("click", handler2)
btn2.removeEventListener("click", handler1)  // remove the event listener


let togglebtn = document.querySelector(".toggleBtn");
let inDarkMode = false;

const changeScreenMode = () => {
    if(!inDarkMode) {
        document.body.style.backgroundColor = "#0D1717";
        inDarkMode = true;
    }
    else{
        document.body.style.backgroundColor = "white";
        inDarkMode = false;
    }
}

togglebtn.addEventListener("click",changeScreenMode)