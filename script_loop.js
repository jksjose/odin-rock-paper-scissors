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
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Enter your choice");
    let userSelection = userChoice.slice(0, 1).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
    let computerSelection = getComputerChoice();

    if (userSelection !== "Rock" &&
        userSelection !== "Paper" &&
        userSelection !== "Scissor") {
          alert("Invalid choice");
        }

    function playRound(userSelection, computerSelection) {
      let roundResult;
      let userRoundScore = 0;
      let computerRoundScore = 0;

      if (userSelection === "Rock" && computerSelection === "Scissor") {
        roundResult = "You won! Rock beats scissor";
        userRoundScore = 1
      } else if (userSelection === "Paper" && computerSelection === "Rock") {
        roundResult = "You won! Paper beats rock";
        userRoundScore = 1
      } else if (userSelection === "Scissor" && computerSelection === "Paper") {
        roundResult = "You won! Scissor beats paper";
        userRoundScore = 1
      } else if (userSelection === "Scissor" && computerSelection === "Rock") {
        roundResult = "You lose! Rock beats scissor";
        computerRoundScore = 1
      } else if (userSelection === "Rock" && computerSelection === "Paper") {
        roundResult = "You lose! Paper beats rock";
        computerRoundScore = 1
      } else if (userSelection === "Paper" && computerSelection === "Scissor") {
        roundResult = "You lose! Scissor beats paper";
        computerRoundScore = 1
      } else if (userSelection === "Rock" && computerSelection === "Rock" ||
                 userSelection === "Paper" && computerSelection === "Paper" ||
                 userSelection === "Scissor" && computerSelection === "Scissor") {
        roundResult = "It's a draw";
      } else {
        roundResult = "User has invalid choice"
      }

      console.log(roundResult);
      userScore += userRoundScore;
      computerScore += computerRoundScore;
      userRoundScore = 0;
      computerRoundScore = 0;
    }
    playRound(userSelection, computerSelection);
  }  

  let gameResult = "Your score: " + userScore + " Computer score: " + computerScore;
  console.log(gameResult);
}

playGame()