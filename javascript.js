const choices = ['rock','paper','scissors']
function getComputerChoice(){
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
};

const selection = document.querySelectorAll('.selections button');
const resultstext = document.querySelector('.results');
const playagain = document.querySelector('.play-again button')

playagain.addEventListener('click', () => location.reload());
selection.forEach(button =>{
    button.addEventListener('click',getPlayerChoice)
});

function getPlayerChoice(e){
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    console.log(playerChoice);
    const results = playround(playerChoice, getComputerChoice());
    console.log(results[1])
    resultstext.textContent = results[1];
}

const playercount = document.querySelector('.player');
const draws = document.querySelector('.draws');
const computercount = document.querySelector('.computer');

let userwins = computerwins = ties = 0

function isgameover(){
    return userwins===5 || computerwins===5;
}
let winner;

function checkWinner(){
    if (userwins===5){
        return 'user';
    }
    else{
        return 'computer';
    }
}

function playround(playerchoice, computerchoice){
    let result;
    playerchoice=playerchoice.toLowerCase();
    if (playerchoice===computerchoice){
        result = "tie";
        ties+=1
        draws.textContent = `DRAWS: ${ties}`;
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
        userwins+=1
        playercount.textContent = `PLAYER WINS: ${userwins}`
    }
    else {
            computerwins+=1
            computercount.textContent = `COMPUTER WINS: ${computerwins}`};


    if (isgameover()){

        console.log("GAME OVER");
        winner = checkWinner();
        console.log(winner);
        selection.forEach(button => {
            button.removeEventListener('click', getPlayerChoice);
        })
        if (winner=='user'){
            return [3, 'YOU WON THE GAME!'];
        }
        else{
            return [3, "OOF! YOU LOST!"];
        }
    }

    if (result=="win"){
        return [1,`You Won! ${playerchoice} beats ${computerchoice}`];
    }
    else {
        return [-1,`You Lose! ${computerchoice} beats ${playerchoice}`];
    }

};