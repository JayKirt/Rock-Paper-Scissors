function play(playerChoice) {
    var choices = ['rock', 'paper', 'scissors'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    var result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
  
    document.getElementById('result').textContent = 'Player chose ' + playerChoice + ', Computer chose ' + computerChoice + '. ' + result;
  }