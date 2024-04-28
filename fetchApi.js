//the following code will fetch a cat fact from the defined URL
//API don't require to refresh the page, it works on runtime

//fetch() returns a promise
//json() returns a promise

/*
HELPING MATERIAL:

HTTP request types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
HTTP status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

*/

URL = "https://cat-fact.herokuapp.com/facts"

//Using fetch api using async await

// const catfacts = async () => {
//     let response = await fetch(URL)        //fetch method creates a GET request
//     console.log(response)  //response comes in JSON format 
//     //To convert json to js object, use <json>.json() method. Here <json> = response 
//     let data = await response.json()    // json() method is asyncrohonus
//     console.log(data[0].text)
// }


//There is another way to write the above code i.e using promises

function catfacts(){
    fetch(URL).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res[0].text)
    })
}


catfacts()