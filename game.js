"use strict"

//two player game
//single player is human and AI and multiplayer is human and human
//store gestures in an array and utilize the array to display and assign gestures
//the correct player needs to win a given round based on the choices made by each player
//needs to be a best of 3 to decide winner

//construct a Game class and use this to be the parent for single and multiplayer games
const prompt = require('prompt-sync')();

class Game {
    constructor() {
        this.playerOne //build out if human or AI
        this.playerTwo //build out if human or AI
        this.gestureChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }

    runGame() {
        this.displayRules();

        this.chooseGameType();

        this.makeGestureChoices();

        this.determineWinner();

        this.displayOverallGameWinner();
    
    }

    displayRules() {
        console.log("Welcome to Rock-Paper-Scissors-Lizard-Spock Game!");
        console.log("Two players will compete by choosing gestures.");
        console.log("Rock crushes Scissors.\nScissors cuts Paper.\nPaper covers Rock.\nRock crushes Lizard.\nLizard poisons Spock.\nSpock smashes Scissors.\nScissors decapitates Lizard.\nLizard eats Paper.\nPaper disproves Spock.\nSpock vaporizes Rock.");
        console.log("The winner of RPSLS will, at a minimum, need to win the best of three games to be crowned the victor!");
    }

    chooseGameType() { //be sure to design in validation
        console.log("Do you want to play 'single player' or 'multiplayer'?");
        gameTypeChoice = prompt();

        if(gameTypeChoice === 'single player') { //I need to create the players and make sure I import correctly
            this.playerOne = new HumanPlayer();
            this.playerTwo = new ComputerPlayer();
        } else if (gameTypeChoice === 'multiplayer') {
            this.playerOne = new HumanPlayer();
            this.playerTwo = new HumanPlayer();
        } else {
            console.log("You did not choose a valid game type.");
            this.chooseGameType();
        }
    }

    makeGestureChoices() {

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
        
        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {

            if(this.playerOne.choice === 'rock' && (this.playerTwo.choice === 'spock' || this.playerTwo.choice === 'paper')) {
                this.playerTwo.score += 1; //I nedd to still build out the ability to capture the score
            } else if(this.playerOne.choice === 'paper' && (this.playerTwo.choice === 'lizard' || this.playerTwo.choice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOne.choice === 'scissors' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'spock')) {
                this.playerTwo.score += 1;
            } else if(this.playerOne.choice === 'lizard' && (this.playerTwo.choice === 'rock' || this.playerTwo.choice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOne.choice === 'spock' && (this.playerTwo.choice === 'lizard' || this.playerTwo.choice === 'paper')) {
                this.playerTwo.score += 1;
            } else if(this.playerOne.choice === this.playerTwo.choice) {
                this.playerOne.score  = 0;
                this.playerTwo.score = 0;
            } else {
                this.playerOne.score +=1;
            }
        }
    }

    displayOverallGameWinner() {
        if(this.playerOne.score > this.playerTwo.score) {
            console.log("Player One wins this game!");
        } else {
            console.log("Player Two wins this game!");
        }
    }
}

