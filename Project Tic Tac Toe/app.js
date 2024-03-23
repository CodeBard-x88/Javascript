let all_Buttons = document.querySelectorAll("button")
let turns = 1;
let gameCompleted = false;

function checkWin(indices) {
    const [a, b, c] = indices;
    const buttons = all_Buttons[a].innerText.trim() !== "" &&
                    all_Buttons[a].innerText === all_Buttons[b].innerText &&
                    all_Buttons[a].innerText === all_Buttons[c].innerText;

    if (buttons) {
        all_Buttons[a].style.backgroundColor = "green";
        all_Buttons[b].style.backgroundColor = "green";
        all_Buttons[c].style.backgroundColor = "green";
        gameCompleted = true;
        return true;
    }
    return false;
}

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkforWin() {
    console.log("Check for win called!");
    for (const combination of winningCombinations) {
        if (checkWin(combination)) {
            return;
        }
    }
    console.log("Game not completed yet!");
}



let tictactoe = (e) =>{

    if(!gameCompleted){

        let el = document.querySelector("#"+e.target.id)
        if (turns++ % 2 == 0){
            el.innerText = "X"
            x_turn = false;
        }else{
            el.innerText = "O";
            x_turn = true;
        }
        el.style.backgroundColor = "#fdf0d5";
        if(turns > 4){
            checkforWin();
        }
        el.removeEventListener("click",tictactoe)

    }

}

for ( let i of all_Buttons){
    i.addEventListener("click",tictactoe)
}

