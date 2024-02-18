function getComputerChoice() {
  let rock = 1;
  let paper = 2;
  let scissor = 3;

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function playGame() {
  let playerChoice;
  let playerSelection;
  let computerSelection;

  function choice() {
    playerChoice = prompt("Enter choice");
    playerSelection = playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    console.log(computerSelection);
  }

  let playerRoundScore = 0;
  let computerRoundScore = 0;
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;
  let result;

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
      roundResult = "You won! Paper beats Rock";
      playerRoundScore = 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
      roundResult = "You won! Rock beats Scissor";
      playerRoundScore = 1;
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
      roundResult = "You won! Scissor beats Paper";
      playerRoundScore = 1;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
      roundResult = "You Lose! Paper beats Rock";
      computerRoundScore = 1;
    } else if (computerSelection === "Rock" && playerSelection === "Scissor") {
      roundResult = "You Lose! Rock beats Scissor";
      computerRoundScore = 1;
    } else if (computerSelection === "Scissor" && playerSelection === "Paper") {
      roundResult = "You Lose! Scissor beats Paper";
      computerRoundScore = 1;
    } else {
      roundResult = "It's a draw"
      playerRoundScore = 0;
      computerRoundScore = 0;
    }
  }

  function restart() {
    playerRoundScore = 0;
    computerRoundScore = 0;
  }

  choice();
  playRound(playerSelection, computerSelection);
  console.log(roundResult);
  playerScore += playerRoundScore;
  computerScore += computerRoundScore;
  restart();
  

  choice();
  playRound(playerSelection, computerSelection);
  console.log(roundResult);
  playerScore += playerRoundScore;
  computerScore += computerRoundScore;
  restart();

  choice();
  playRound(playerSelection, computerSelection);
  console.log(roundResult);
  playerScore += playerRoundScore;
  computerScore += computerRoundScore;
  restart();

  choice();
  playRound(playerSelection, computerSelection);
  console.log(roundResult);
  playerScore += playerRoundScore;
  computerScore += computerRoundScore;
  restart();

  choice();
  playRound(playerSelection, computerSelection);
  console.log(roundResult);
  playerScore += playerRoundScore;
  computerScore += computerRoundScore;
  restart();

  result = "Your score: " + playerScore + ", Computer score: " + computerScore; 
  console.log(result);

  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > playerScore) {
    console.log("You lose!");
  } else {
    console.log("It's a draw");
  }
}

playGame();

