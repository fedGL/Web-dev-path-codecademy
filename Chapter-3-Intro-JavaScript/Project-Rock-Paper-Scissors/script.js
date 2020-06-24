const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  console.log('Input error');
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'tie';
  }
  if (userChoice === 'bomb'){
    return 'Cheat code used. User ALWAYS wins Yo Ho Ho!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer Wins!'
    } else if (computerChoice === 'scissors'){
      return 'User wins!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer Wins!';
    } else if (computerChoice === 'rock'){
      return 'User Wins!';
    }
  }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer Wins!';
    } else if (computerChoice === 'paper'){
      return 'User Wins!';
    }
  }
}

const playGame = () => {
  console.log('Welcome to Rock, Paper, Scissors!')
  userChoice = getUserChoice('bomb');
  console.log(`The user: ${userChoice}`);
  computerChoice = getComputerChoice();
  console.log(`The computer: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();