function getComputerChoice(){
    index = Math.floor(Math.random() * 3);
    console.log(index);
    let choices = ["Rock","Paper","Scissor"];
    return choices[index];
}


let computerSelection = getComputerChoice();
let lowerCaseInput;

let player,computer;

function playRound(playerSelection,computerSelection){
     playerSelection =  window.prompt("Rock Paper Scissor Shoot!", "Type your choice: ");
     lowerCaseInput = playerSelection.toLowerCase();
    let winner;
    if(lowerCaseInput == "rock" && computerSelection == "Paper"){
        computer++;
        winner = "You Lose! " + computerSelection + " beats "  + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1);
    }else if(lowerCaseInput == "scissor" && computerSelection == "Rock"){
        computer++;
        winner = "You Lose! " + computerSelection + " beats "  + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1);
    }else if(lowerCaseInput == "paper" && computerSelection == "Scissor"){
        computer++;
        winner = "You Lose! " + computerSelection + " beats "  + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1);
    }else if (lowerCaseInput == "rock" && computerSelection == "Scissor"){
        player++;
        winner = "You WIN! " + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1) + " beats " + computerSelection;
    }else if(lowerCaseInput ==  "paper" && computerSelection == "Rock"){
        player++;
        winner = "You WIN! " + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1) + " beats " + computerSelection;
    }else if(lowerCaseInput == "scissor" && computerSelection == "Paper"){
        player++;
        winner = "You WIN! " + lowerCaseInput.charAt(0).toUpperCase(0) + lowerCaseInput.slice(1) + " beats " + computerSelection;   
    }else if(lowerCaseInput == computerSelection.charAt(0).toLowerCase() + computerSelection.slice(1)){
        winner = "TIE!";
    }

     return(winner);
}

function game(){
    for(let i = 0 ;i < 5;i++){
        alert(playRound(lowerCaseInput,getComputerChoice()));
    }
    let winner;
    if(player > computer){
        winner = "You are the winner!";
    }else if(computer > player){
        winner = "Computer is the winner!";
    }else if (computer == player){
        winner = "The match is a tie!";
    }
    return winner;
}


alert(game());
