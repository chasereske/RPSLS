"use strict"

//two player game
//single player is human and AI and multiplayer is human and human
//store gestures in an array and utilize the array to display and assign gestures
//the correct player needs to win a given round based on the choices made by each player
//needs to be a best of 3 to decide winner

//construct a Game class and use this to be the parent for single and multiplayer games
class Game {
    constructor() {
        this.playerOne //build out if human or AI
        this.playerTwo //build out if human or AI
        this.gestureChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }

    displayRules() {
        console.log("Welcome to Rock-Paper-Scissors-Lizard-Spock Game!");
        console.log("Two players will compete by choosing gestures.");
        console.log("Rock crushes Scissors.\nScissors cuts Paper.\nPaper covers Rock.\nRock crushes Lizard.\nLizard poisons Spock.\nSpock smashes Scissors.\nScissors decapitates Lizard.\nLizard eats Paper.\nPaper disproves Spock.\nSpock vaporizes Rock.");
        console.log("The winner of RPSLS will, at a minimum, need to win the best of three games to be crowned the victor!");
    }

    class Player {
        constructor() {
            this.score = 0;
        }
    }

    class HumanPlayer extends Player {
        constructor(name) {
            super(score);
            this.name = name;
        }
    }

    class ComputerPlayer extends Player {
        constructor() {
            super(score);
            this.name = "Computer";
            this.choice = computerChoice(); 
        }
    }

    computerChoice() {
        let randomNumber = Math.random();
        let computerChoice;

        if(randomNumber < 0.19) {
            computerChoice = 'rock';
        } else if(randomNumber <= 0.38) {
            computerChoice = 'paper';
        } else if(randomNumber <= 0.57) {
            computerChoice = 'scissors';
        } else if(randomNumber = 0.76) {
            computerChoice = 'lizard';
        } else {
            computerChoice = 'spock';
        }
        return computerChoice;
    }

    determineWinner(playerOneChoice, playerTwoChoice) { //I still need to build out the ability to capture choices
        
        if(playerOneChoice === 'rock' && (playerTwoChoice === 'spock' || playerTwoChoice === 'paper')) {
            playerTwoScore += 1; //I nedd to still build out the ability to capture the score
        } else if(playerOneChoice === 'paper' && (playerTwoChoice === 'lizard' || playerTwoChoice === 'scissors')) {
            playerTwoScore += 1;
        } else if(playerOneChoice === 'scissors' && (playerTwoChoice === 'rock' || playerTwoChoice === 'spock')) {
            playerTwoScore += 1;
        } else if(playerOneChoice === 'lizard' && (playerTwoChoice === 'rock' || playerTwoChoice === 'scissors')) {
            playerTwoScore += 1;
        } else if(playerOneChoice === 'spock' && (playerTwoChoice === 'lizard' || playerTwoChoice === 'paper')) {
            playerTwoScore += 1;
        } else if(playerOneChoice === playerTwoChoice) {
            playerOneScore = 0;
            playerTwoScore = 0;
        } else {
            playerOneScore +=1;
        }
    }
}

