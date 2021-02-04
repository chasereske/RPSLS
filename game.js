"use strict"

//two player game
//single player is human and AI and multiplayer is human and human
//store gestures in an array and utilize the array to display and assign gestures
//the correct player needs to win a given round based on the choices made by each player
//needs to be a best of 3 to decide winner

//construct a Game class and use this to be the parent for single and multiplayer games
const prompt = require('prompt-sync')();
const players = require('./players')

class Game {
    constructor() {
        this.playerOne; 
        this.playerTwo; 
        this.gestureChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.playerOneChoice;
        this.playerTwoChoice;
        this.gameTypeChoice;
    }

    runGame() {
        this.displayRules();

        this.gameTypeChoice = this.chooseGameType();

        this.makeGestureChoices();

        this.determineWinner();

        this.displayOverallGameWinner();
    
    }

    //This code section is what is being run during the runGame() method

    displayRules() {
        console.log("Welcome to Rock-Paper-Scissors-Lizard-Spock Game!");
        console.log("Two players will compete by choosing gestures.");
        console.log("Rock crushes Scissors.\nScissors cuts Paper.\nPaper covers Rock.\nRock crushes Lizard.\nLizard poisons Spock.\nSpock smashes Scissors.\nScissors decapitates Lizard.\nLizard eats Paper.\nPaper disproves Spock.\nSpock vaporizes Rock.");
        console.log("The winner of RPSLS will, at a minimum, need to win the best of three games to be crowned the victor!");
    }

    chooseGameType() { 
        console.log("Do you want to play 'single player' or 'multiplayer'?");
        let gameTypeChoice = prompt();

        if(gameTypeChoice === 'single player') { 
            this.playerOne = new players.HumanPlayer();
            this.playerTwo = new players.ComputerPlayer();
        } else if (gameTypeChoice === 'multiplayer') {
            this.playerOne = new players.HumanPlayer();
            this.playerTwo = new players.HumanPlayer();
        } else {
            console.log("You did not choose a valid game type.");
            this.chooseGameType();
        }

        return gameTypeChoice;
    }

    makeGestureChoices() {
        if(this.gameTypeChoice === "single player") {
            this.makeSinglePlayerGestureChoices();
        } else {
            this.makeMultiplayerGestureChoices();
        }
    }
    
    determineWinner() {

        if(this.gameTypeChoice === "single player") {
            this.determineSinglePlayerWinner();
        } else {
            this.determineMultiplayerWinner();
        }
    }

    displayOverallGameWinner() {
        if(this.playerOne.score > this.playerTwo.score) {
            console.log("Player One wins this game!");
        } else {
            console.log("Player Two wins this game!");
        }
    }

    //This code block are the specifics around how runGame() works

    makeSinglePlayerGestureChoices() {

        console.log("Player One: What is your choice of gesture?");
        this.playerOneChoice = prompt();

        for(let i=0; i<this.gestureChoices.length; i++) {
            if(this.playerOneChoice === this.gestureChoices[i]){
                console.log("That's a great choice! Good luck!");
            } else{
                console.log("That is an invalid choice. Please enter one of the following: rock, paper, scissors, lizard, or spock.");
                this.makeSinglePlayerGestureChoices();
            }
        }

        this.playerTwoChoice = this.computerChoice();
        console.log("The computer's choice is: " + this.playerTwoChoice);

        return this.playerOneChoice, this.playerTwoChoice; 
    }

    makeMultiplayerGestureChoices() {

        console.log("Player One: What is your choice of gesture?");
        this.playerOneChoice = prompt();

        for(let i=0; i<this.gestureChoices.length; i++) {
            if(this.playerOneChoice === this.gestureChoices[i]){
                console.log("That's a great choice! Good luck!");
            } else{
                console.log("That is an invalid choice. Please enter one of the following: rock, paper, scissors, lizard, or spock.");
                this.makeSinglePlayerGestureChoices();
            }
        }

        console.log("Player Two: What is your choice of gesture?");
        this.playerTwoChoice = prompt();

        for(let i=0; i<this.gestureChoices.length; i++) {
            if(this.playerTwoChoice === this.gestureChoices[i]){
                console.log("That's a great choice! Good luck!");
            } else{
                console.log("That is an invalid choice. Please enter one of the following: rock, paper, scissors, lizard, or spock.");
                this.makeSinglePlayerGestureChoices();
            }
        }

        return this.playerOneChoice, this.playerTwoChoice;
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
        } else if(randomNumber <= 0.76) {
            computerChoice = 'lizard';
        } else {
            computerChoice = 'spock';
        }
        return computerChoice;
    }
    
    determineSinglePlayerWinner() { 
    
        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {

            console.log("Player One Score: " + this.playerOne.score + ".\nPlayer Two Score: " + this.playerTwo.score + ".");

            this.makeSinglePlayerGestureChoices();
            
            if(this.playerOneChoice === 'rock' && (this.playerTwoChoice === 'spock' || this.playerTwoChoice === 'paper')) {
                this.playerTwo.score += 1; 
            } else if(this.playerOneChoice === 'paper' && (this.playerTwoChoice === 'lizard' || this.playerTwoChoice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'scissors' && (this.playerTwoChoice === 'rock' || this.playerTwoChoice === 'spock')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'lizard' && (this.playerTwoChoice === 'rock' || this.playerTwoChoice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'spock' && (this.playerTwoChoice === 'lizard' || this.playerTwoChoice === 'paper')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === this.playerTwoChoice) {
                this.playerOne.score  += 0;
                this.playerTwo.score += 0;
            } else {
                this.playerOne.score +=1;
            }
        }
    }

    determineMultiplayerWinner() { 
        
        while(this.playerOne.score < 3 && this.playerTwo.score < 3) {

            console.log("Player One Score: " + this.playerOne.score + ".\nPlayer Two Score: " + this.playerTwo.score + ".");
            
            this.makeMultiplayerGestureChoices();

            if(this.playerOneChoice === 'rock' && (this.playerTwoChoice === 'spock' || this.playerTwoChoice === 'paper')) {
                this.playerTwo.score += 1; 
            } else if(this.playerOneChoice === 'paper' && (this.playerTwoChoice === 'lizard' || this.playerTwoChoice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'scissors' && (this.playerTwoChoice === 'rock' || this.playerTwoChoice === 'spock')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'lizard' && (this.playerTwoChoice === 'rock' || this.playerTwoChoice === 'scissors')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === 'spock' && (this.playerTwoChoice === 'lizard' || this.playerTwoChoice === 'paper')) {
                this.playerTwo.score += 1;
            } else if(this.playerOneChoice === this.playerTwoChoice) {
                this.playerOne.score  += 0;
                this.playerTwo.score += 0;
            } else {
                this.playerOne.score +=1;
            }
        }
    }
}

module.exports.Game = Game;
