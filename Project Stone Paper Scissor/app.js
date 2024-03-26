let userScore = 0;
let computerScore = 0;
let msg = "";
let color = "";

let choices = document.querySelectorAll(".choice");

const generateComputerOption = () => {
    const choices = ["stone", "paper", "scissor"];
    let random_Number = Math.floor(Math.random() * 3);
    return choices[random_Number];
}

const showScores = () =>{
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#computer-score").innerText = computerScore;
}

const showMessage = () => {
    let el = document.querySelector("#msg");
    el.innerText = msg;
    el.style.color = color;
}

const PlayGame = (userChoice) =>{
    const computer_Choice = generateComputerOption();
    if(userChoice == computer_Choice){
        color = "Red";
    }
    else if((userChoice == "stone" && computer_Choice == "paper") || (userChoice == "paper" && computer_Choice == "scissor") || (userChoice == "scissor" && computer_Choice == "stone") ){
        computerScore++;
    }
    else{
        userScore++;
    }

    msg = `You choosed ${userChoice}!\nComputer choosed ${computer_Choice}!\n`;
    if(computerScore>userScore){
        msg += "Computer is winning";
        color = "red";
    }
    else if(userScore > computerScore){
        msg += "Great You are Winning!";
        color = "green";
    }
    else{
        color = "black";
        msg += "Scores Level!";
    }
    showScores();
    showMessage();
}

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const id = choice.getAttribute("id");
        PlayGame(id);
    })
})