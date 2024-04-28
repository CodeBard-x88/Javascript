
const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

let dropdowns = document.querySelectorAll(".dropdowns select");

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
    let img = el.parentElement.querySelector("img").src = `https://flagsapi.com/${countryList[el.value]}/shiny/64.png`
}