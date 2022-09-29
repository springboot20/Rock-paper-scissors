let playGame = confirm('Shall we play a Rock, Paper and Scissors Game');
if (playGame) {
    const playerChoice = prompt('Enter Rock, Paper or Scissors');
    while (playGame) {
        if (playerChoice || playerChoice === '') {
            const playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {

                const computerChoice = Math.floor(Math.random() * 3 + 1);
                let rpsValue = ['rock', 'paper', 'scissors'];
                let computer = rpsValue[computerChoice];

                const result = playerOne === computer
                    ? `Tie game`
                    : playerOne === 'rock' && computer === 'paper'
                        ? `Player One : ${playerOne} \n Computer : ${computer} \n Computer wins!!!`
                        : playerOne === 'paper' && computer === 'scissors'
                            ? `Player One : ${playerOne} \n Computer : ${computer} \n Computer wins!!!`
                            : playerOne === 'scissors' && computer === 'rock'
                                ? `Player One : ${playerOne} \n Computer : ${computer} \n Computer wins!!!`
                                : `Player One : ${playerOne} \n Computer : ${computer} \n Player wins!!!`;
                alert(result)
                playGame = confirm('Play Again');
                if (!playGame) alert('Ok, thanks for playing');
                continue;
            } else {
                alert('You didn\'t enter rock, paper, or scissors.');
                continue;
            }
        } else {
            alert('I guess you\'ve changed your mind. Maybe next time');
            break;
        }
    }
} else {
    alert('Ok, maybe Next Time');
}
