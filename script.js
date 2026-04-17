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

const compyTurn = getComputerChoice();
console.log(compyTurn);
