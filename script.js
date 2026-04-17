function getComputerChoice() {
    let computerChoice = Math.random();
    console.log(computerChoice);

    if (computerChoice <= 0.333) {
        computerChoice = `rock`
    } else if (computerChoice >0.666) {
        computerChoice = `scissors`
    } else computerChoice = `paper`;
    
    return computerChoice;
}


function getHumanChoice() {
    let humanChoice = prompt(`Make your choice:` , `rock, paper, or scissors`);

    return humanChoice;
}


let humanScore = 0;
let compyScore = 0;

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
    console.log("Tie!");
} else if (humanChoice === `rock` && computerChoice === `paper`) {
    console.log("Paper covers rock - You lose!");
} else if (humanChoice === `rock` && computerChoice === `scissors`) {
    console.log("Rock breaks scissors - You win!");
} else if (humanChoice === `paper` && computerChoice === `rock`) {
    console.log("Paper covers rock - You win!");
} else if (humanChoice === `paper` && computerChoice === `scissors`) {
    console.log("Rock breaks scissors - You win!");
} else if (humanChoice === `scissors` && computerChoice === `rock`) {
    console.log("Rock breaks scissors - You lose!");
} else if (humanChoice === `scissors` && computerChoice === `paper`) {
    console.log("Scissors cut paper - You win!");
} else (console.log("You're terrible at this game!"));
}


const humanTurn = getHumanChoice();
const compyTurn = getComputerChoice();

playRound(humanTurn, compyTurn);
