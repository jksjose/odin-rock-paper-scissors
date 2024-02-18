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
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Enter your choice");
    let userSelection = userChoice.slice(0, 1).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
    let computerSelection = getComputerChoice();
    let userScore = 0;
    let computerScore = 0;

    function playRound(userSelection, computerSelection) {
      let roundResult;
      let roundScore = 0;

      if (userSelection === "Rock" && computerSelection === "Scissor") {
        roundResult = "You won! Rock beats scissor";
        roundScore = 1
      } else if (userSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "You won! Paper beats rock";
        roundScore = 1
      } else if (userSelection === "Scissor" && computerSelection === "Paper") {
        roundResult = "You won! Scissor beats paper";
        roundScore = 1
      } else if (userSelection === "Scissor" && computerSelection === "Rock") {
        roundResult = "You lose! Rock beats scissor";
        roundScore = 1
      } else if (userSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "You lose! Paper beats rock";
        roundScore = 1
      } else if (userSelection === "Paper" && computerSelection === "Scissor") {
        roundResult = "You lose! Scissor beats paper";
        roundScore = 1
      } else {
        roundResult = "It's a draw";
      }

      console.log(roundResult);
      userScore = roundScore;
      computerScore = roundScore;
      roundScore = 0;
    }
    playRound(userSelection, computerSelection);
  }

  
  let gameResult = "Your score: " + userScore + " Computer score: " + computerScore;
  console.log(gameResult);
}

playGame()