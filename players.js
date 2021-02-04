"use strict"

class Player {
    constructor() {
        this.score = 0;
    }
}

class HumanPlayer extends Player {
    constructor() {
        super();
        this.name; //Still haven't built out the name yet
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super();
        this.name = "Computer";
        this.choice; //Temporarily took this out to see if the code works 
    }

    // methods 
}

module.exports.Player = Player;
module.exports.HumanPlayer = HumanPlayer;
module.exports.ComputerPlayer = ComputerPlayer;