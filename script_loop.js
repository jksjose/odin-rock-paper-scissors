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
  
}