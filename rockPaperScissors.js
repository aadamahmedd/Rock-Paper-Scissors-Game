//Rock Paper Scissor's Game!
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error!');
    }
};
//Randomizes the computer's choice in the function below
const getComputerChoice = () => {
  const randonNumber = Math.floor(Math.random() * 3);
  switch (randonNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
};
//Validation
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
 if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, Computer won :(";
    }
    return "Congrats, you won!";
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') { 
      return "Sorry, the computer won :(";
    } 
    return "Congrats, you won!";
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, the computer won :(";
    } 
    return "Congrats, you won!";
  }
  if (userChoice === 'bomb'){
    return 'Congrats, you automatically won!.';
  }
};
//Output
const playGame = () => {
  //Before running this program, enter a valid choice in the getUserChoice() below!
  const userChoice = getUserChoice('');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: '+ computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();