const choices = ['rock','paper','scissors']
function getComputerChoice(){
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
};

function playround(playerchoice, computerchoice){
    let result;
    playerchoice=playerchoice.toLowerCase();
    if (playerchoice===computerchoice){
        result = "tie";
        return [0,"It was a tie!"]
    }
    else if (playerchoice=="rock" && computerchoice=="scissors"){
        result = "win";
    }
    else if (playerchoice=="paper" && computerchoice=="rock"){
        result = "win";
    }
    else if (playerchoice=="scissors" && computerchoice=="paper"){
        result = "win";
    }
    else{
        result = "lose";
    }

    if (result=="win"){
        return [1,`You Won! ${playerchoice} beats ${computerchoice}`];
    }
    else {
        return [-1,`You Lose! ${computerchoice} beats ${playerchoice}`];
    }

}

function game(){
    let userwins = computerwins = ties =0;
    for (let i =0; i<5; i++){
        let playerSelection = prompt("Choose what to play this round: (Rock, Paper, Scissors)")
        const computerSelection = getComputerChoice();
        result = playround(playerSelection, computerSelection);
        winner = result[0]
        console.log(result[1])
        if (winner==1){
            userwins+=1;
        }
        else if (winner==-1){
            computerwins+=1;
        }
        else{
            ties+=1
        }
    }
    let endmessage;
    if (userwins>computerwins){
        endmessage=`User wins overall! --> ${userwins}`;
    }
    else if (computerwins>userwins){
        endmessage =`Computer wins overall! --> ${computerwins}`;
    }
    else {
        endmessage = `NO ONE WON! User: ${userwins} Computer: ${computerwins} Ties: ${ties}`;
    }
    console.log(endmessage);
    alert(endmessage);
    
}
game()
