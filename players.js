"use strict"

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

module.exports.Player = Player;
module.exports.HumanPlayer = HumanPlayer;
module.exports.ComputerPlayer = ComputerPlayer;