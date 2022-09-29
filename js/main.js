
window.addEventListener('DOMContentLoaded', event => {
    event.preventDefault();

    /*******************************************
     * SCORES FOR BOTH PLAYER AND COMPUTER
    *******************************************/

    let playerScore = 0;
    let computerScore = 0;

    let targetScore = 10

    /***************************
     * START GAME HANDLER
    *************************/
    const startGame = (introId, matchId, introBtnId) => {
        const introScreen = document.querySelector(`.${introId}`);
        const matchScreen = document.querySelector(` .${matchId}`);
        const introBtn = document.querySelector(`.${introBtnId}`);

        introBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            matchScreen.classList.add('fadeIn')
        })
    }
    startGame('intro', 'match', 'intro-btn');


    const restGame = () => {
        playerScore = 0
        computerScore = 0

        const introScreen = document.querySelector(`.intro`);
        const matchScreen = document.querySelector(`.match`);

        document.querySelector('.intro-btn').addEventListener('click', () => {
            introScreen.classList.add('fadeIn')
            matchScreen.classList.add('fadeOut')
        })

    }


    /***************************
     * PLAY MATCH HANDLER
    *************************/
    const playMatch = (pHandId, cHandId) => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector(`.${pHandId}`)
        const computerHand = document.querySelector(`.${cHandId}`)

        let computerOptions = ['rock', 'paper', 'scissors']
        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerPick = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerPick]
                console.log(computerChoice);

                // Using SetTimeout function to delay the player reponse
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice, 'winner');
                    // Setting Player and computer hands based on the players options
                    playerHand.innerHTML = `<span class="fas fa-hand-${this.textContent}"></span>`
                    computerHand.innerHTML = `<span class="fas fa-hand-${computerChoice}"></span>`
                }, 400);
            })
        })
    }
    playMatch('player-hand', 'computer-hand')

    /***************************
       * COMPARE HANDS HANDLER
    *************************/

    const compareHands = (playerChoice, computerChoice, winnerId) => {
        const winner = document.querySelector(`.${winnerId}`)
        if (playerChoice === computerChoice) {
            winner.textContent = `It's a Tie game`;
            return;
        }

        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                winner.textContent = `Computer Wins!!!`;
                computerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            } else {
                winner.textContent = `Player Wins!!!`;
                playerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = `Computer Wins!!!`;
                computerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            } else {
                winner.textContent = `Player Wins!!!`;
                playerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = `Computer Wins!!!`;
                computerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            } else {
                winner.textContent = `Player Wins!!!`;
                playerScore++;
                updateScores('pScoreCount', 'cScoreCount')
                return;
            }
        }
    }

    /***************************
       * COMPARE SCORES HANDLER
    *************************/


    const gameOver = (pScore, cScore) => {
        if (pScore === targetScore || cScore === targetScore) {
            document.querySelector(`.winner`).innerText = 'Game over'
            restGame()
        }
    }

    /***************************
   * UPDATE SCORES HANDLER
    *************************/
    const updateScores = (pScoreId, cScoreId) => {
        const playerScores = document.querySelector(`.${pScoreId}`)
        const computerScores = document.querySelector(`.${cScoreId}`)

        playerScores.textContent = playerScore
        computerScores.textContent = computerScore

        gameOver(playerScore, computerScore)
    }
})
