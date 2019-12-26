let computerChoice;

let humanChoice;

let computerScore;

let humanScore;

const result = document.querySelector('div.result');
const humanSB = document.querySelector('div.humanScore');
const cpuSB = document.querySelector('div.cpuScore');
const playerSelect = document.querySelector('div.playerSelect');
const computerSelect = document.querySelector('div.computerSelect');

//Will generate a random play for computer and assign to computerChoice
function computerPlay() {
    let ranNum = Math.floor(Math.random() * 3);

    switch (ranNum) {
        case 0:
            computerChoice = "Rock";
            break;

        case 1:
            computerChoice = "Scissors";
            break;

        case 2:
            computerChoice = "Paper";
            break;

        default:
            break;
    }
}

//Game logic
function playGame(playerChoice, computerChoice) {
    

    if (playerChoice == "Rock") {

        switch (computerChoice) {
            case "Paper":
                computerScore++;
                result.textContent = "You lose.";
                result.style.cssText = "color: red";
                break;
            case "Scissors":
                humanScore++;
                result.textContent = "You win.";
                result.style.cssText = "color: green";
                break;
            case "Rock":
                result.textContent = "It's a tie.";
                result.style.cssText = "color: orange";
                break;
            default:
                result.textContent = "Whoops. Something went wrong here.";
                break;
        }
    }

    else if (playerChoice == "Scissors") {

        switch (computerChoice) {
            case "Paper":
                humanScore++;
                result.textContent = "You win.";
                result.style.cssText = "color: green";
                break;
            case "Scissors":
                result.textContent = "It's a tie.";
                result.style.cssText = "color: orange";
                break;
            case "Rock":
                computerScore++;
                result.textContent = "You lose.";
                result.style.cssText = "color: red";
                break;
            default:
                result.textContent = "Whoops. Something went wrong here.";
                break;
        }
    }

    else if (playerChoice == "Paper") {

        switch (computerChoice) {
            case "Paper":
                result.textContent = "It's a tie.";
                result.style.cssText = "color: orange";
                break;
            case "Scissors":
                computerScore++;
                result.textContent = "You lose.";
                result.style.cssText = "color: red";
                break;
            case "Rock":
                humanScore++;
                result.textContent = "You win.";
                result.style.cssText = "color: green";
                break;
            default:
                result.textContent = "Whoops. Something went wrong here.";
                break;
        }
    }
}

function playRound() {
    if (humanScore < 5 && computerScore < 5) {
        

        playerSelect.textContent = `You chose ${humanChoice}!`;
        computerSelect.textContent = `Computer chose ${computerChoice}!`;

        playGame(humanChoice, computerChoice);
    }
}

function checkGameOver() {

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            result.style.cssText = "color: green;";
            result.textContent = "Game Over. You are the winner!";
            
        }
        else {
            result.style.cssText = "color: red;";
            result.textContent = "Game Over. You have lost.";
        }
    }
}

function updateScore() {
    humanSB.textContent = humanScore;
    cpuSB.textContent = computerScore;
}


function startGame() {
    humanScore = 0;
    computerScore = 0;

    const rockBtn = document.querySelector('button.rock');
    const paperBtn = document.querySelector('button.paper');
    const scissorsBtn = document.querySelector('button.scissors');
    const resetBtn = document.querySelector('button.reset');

    updateScore();

    rockBtn.addEventListener(type="click", function() {
        humanChoice = "Rock";
        computerPlay();
        playRound();
        updateScore();
        checkGameOver();
    });

    paperBtn.addEventListener(type="click", function() {
        humanChoice = "Paper";
        computerPlay();
        playRound();
        updateScore();
        checkGameOver();
    });

    scissorsBtn.addEventListener(type="click", function() {
        humanChoice = "Scissors";
        computerPlay();
        playRound();
        updateScore();
        checkGameOver();
    });

    resetBtn.addEventListener(type="click", function() {
        humanScore = 0;
        computerScore = 0;
        result.textContent = "";
        playerSelect.textContent = "";
        computerSelect.textContent = "";
        updateScore();
    });


}

startGame();

