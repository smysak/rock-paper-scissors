function getComputerChoice() {
	let computerChoice = Math.random();
	console.log(computerChoice);

	if (computerChoice <= 0.333) {
		computerChoice = `rock`
	} else if (computerChoice > 0.667) {
		computerChoice = `scissors`
	} else computerChoice = `paper`;

	console.log(computerChoice);
	return computerChoice;
}


let humanScore = 0;
let compyScore = 0;

const hScoreCount = document.getElementById('hScore');
hScoreCount.textContent = humanScore;

const cScoreCount = document.getElementById('cScore');
cScoreCount.textContent = compyScore;

const alertHumanTurn = document.getElementById('humanTurnAlert');
const alertComputerTurn = document.getElementById('computerTurnAlert');
const alertRoundResult = document.getElementById('roundResultAlert');


function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Tie!";
	} else if (humanChoice === `scissors` && computerChoice === `paper`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Scissors cut paper - You win!";
		return ++humanScore;
	} else if (humanChoice === `rock` && computerChoice === `scissors`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Rock breaks scissors - You win!";
		return ++humanScore;
	} else if (humanChoice === `paper` && computerChoice === `rock`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Paper covers rock - You win!";
		return ++humanScore;
	} else if (humanChoice === `paper` && computerChoice === `scissors`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Scissors cut paper - You lose!";
		return ++compyScore;
	} else if (humanChoice === `scissors` && computerChoice === `rock`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Rock breaks scissors - You lose!";
		return ++compyScore;
	} else if (humanChoice === `rock` && computerChoice === `paper`) {
		alertHumanTurn.textContent = "You chose " + humanChoice;
		alertComputerTurn.textContent = "Compy chose " + computerChoice;
		alertRoundResult.textContent = "Paper covers rock - You lose!";
		return ++compyScore;
	} else alert("You're terrible at this game!");
}


const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');

const selectionsDiv = document.querySelector(".selections");


rockChoice.addEventListener('click', function(event){
	playRound('rock', getComputerChoice());
	hScoreCount.textContent = humanScore;
	cScoreCount.textContent = compyScore;
	if (compyScore === 5 || humanScore === 5){
		selectionsDiv.replaceChildren();
	}
});

paperChoice.addEventListener('click', function(event){
	playRound('paper', getComputerChoice());
	hScoreCount.textContent = humanScore;
	cScoreCount.textContent = compyScore;
	if (compyScore === 5 || humanScore === 5){
		selectionsDiv.replaceChildren();
	}
});

scissorsChoice.addEventListener('click', function(event){
	playRound('scissors', getComputerChoice());
	hScoreCount.textContent = humanScore;
	cScoreCount.textContent = compyScore;
	if (compyScore === 5 || humanScore === 5){
		selectionsDiv.replaceChildren();
	}
});