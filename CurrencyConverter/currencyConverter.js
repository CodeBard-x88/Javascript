
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

let dropdowns = document.querySelectorAll(".dropdowns select");
let btn = document.querySelector(".btn button");

btn.addEventListener("click", () => {
    let amount = document.querySelector(".enter input");
    let amountval = amount.value;

    let convert_from = document.querySelector(".from select");
    let from_country = convert_from.value;

    let convert_to =  document.querySelector(".to select");
    let to_country = convert_to.value;

    const URL =   `${BASE_URL}/${from_country.toLowerCase()}/${to_country.toLowerCase()}.json`

    fetch(URL).then((res)=>{
        console.log(res);
    })
})

for (let select of dropdowns){
    for(let currcode in countryList){
        let newOption = document.createElement("option");
        newOption.value = currcode;
        newOption.innerText = currcode;
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (el) => {
    el.parentElement.querySelector("img").src = `https://flagsapi.com/${countryList[el.value]}/shiny/64.png`
}