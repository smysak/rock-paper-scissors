function getComputerChoice() {
	let computerChoice = Math.random();
	console.log(computerChoice);

	if (computerChoice <= 0.333) {
		computerChoice = `rock`
	} else if (computerChoice > 0.666) {
		computerChoice = `scissors`
	} else computerChoice = `paper`;

	console.log(computerChoice);
	return computerChoice;
}


function getHumanChoice() {
	let humanChoice = prompt(`Make your choice:` , `rock, paper, or scissors`);
	console.log(humanChoice);
	return humanChoice;
}


let humanScore = 0;
let compyScore = 0;

const hScoreCount = document.getElementById('hScore');
hScoreCount.textContent = humanScore;

const cScoreCount = document.getElementById('cScore');
cScoreCount.textContent = compyScore;


function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		alert("Tie!");
	} else if (humanChoice === `scissors` && computerChoice === `paper`) {
		alert("Scissors cut paper - You win!");
		return ++humanScore;
	} else if (humanChoice === `rock` && computerChoice === `scissors`) {
		alert("Rock breaks scissors - You win!");
		return ++humanScore;
	} else if (humanChoice === `paper` && computerChoice === `rock`) {
		alert("Paper covers rock - You win!");
		return ++humanScore;
	} else if (humanChoice === `paper` && computerChoice === `scissors`) {
		alert("Scissors cut paper - You lose!");
		return ++compyScore;
	} else if (humanChoice === `scissors` && computerChoice === `rock`) {
		alert("Rock breaks scissors - You lose!");
		return ++compyScore;
	} else if (humanChoice === `rock` && computerChoice === `paper`) {
		alert("Paper covers rock - You lose!");
		return ++compyScore;
	} else alert("You're terrible at this game!");
}

/*
		// This function will not be used with the new UI

function playGame() {
	for (i=0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
		alert("You: " + humanScore + " Compy: " + compyScore);
	}
	alert("Final Score: You: " + humanScore + " Compy: " + compyScore);
}
	*/