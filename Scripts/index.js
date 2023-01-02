function getComputerChoice(){
    index = Math.floor(Math.random() * 3);
    console.log(index);
    let choices = ["Rock","Paper","Scissor"];
    return choices[index];
}


let computerSelection = getComputerChoice();
let lowerCaseInput;


//score1 is player and score2 is computer
let score1 = 0;
let score2 =0;

function playRound(playerSelection,computerSelection){
    let player = 0;
    let computer = 0;

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
    
    score1 = player;
    score2 = computer; 

     return(winner);
}

function game(player,computer){
    let winner;
    for(let i = 0 ;i < 5;i++){
        alert(playRound(lowerCaseInput,getComputerChoice()));
    }

    if(score1 > score2){
        winner = "You are the winner!";
    }else if(score2 > score1){
        winner = "Computer is the winner!";
    }else if (score1 == score2){
        winner = "The match is a tie!";
    }
   
    return winner;
}

alert(game(player,computer));
