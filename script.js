function getComputerChoice() {
    let computerChoice = Math.random();
    console.log(computerChoice);

    if (computerChoice <= 0.333) {
        console.log(`rock`)
    } else if (computerChoice >0.666) {
        console.log(`scissors`)
    } else console.log(`paper`)
}

getComputerChoice()