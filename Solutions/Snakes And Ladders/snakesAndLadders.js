class SnakesLadders {
  constructor() {
    this.playerOne = 0;
    this.playerTwo = 0;
    this.turn = 1;
  }

  play(die1, die2) {
    if (this.turn === 0) {
      return "Game over!";
    }
    if (this.turn == 1) {
      if (die1 !== die2) {
        this.turn = 2;
      }
      this.playerOne += die1 + die2;
      switch (this.playerOne) {
        case 2:
          this.playerOne = 38;
          return `Player 1 is on square ${this.playerOne}`;
        case 7:
          this.playerOne = 14;
          return `Player 1 is on square ${this.playerOne}`;
        case 8:
          this.playerOne = 31;
          return `Player 1 is on square ${this.playerOne}`;
        case 15:
          this.playerOne = 26;
          return `Player 1 is on square ${this.playerOne}`;
        case 16:
          this.playerOne = 6;
          return `Player 1 is on square ${this.playerOne}`;
        case 21:
          this.playerOne = 42;
          return `Player 1 is on square ${this.playerOne}`;
        case 28:
          this.playerOne = 84;
          return `Player 1 is on square ${this.playerOne}`;
        case 36:
          this.playerOne = 44;
          return `Player 1 is on square ${this.playerOne}`;
        case 46:
          this.playerOne = 25;
          return `Player 1 is on square ${this.playerOne}`;
        case 49:
          this.playerOne = 11;
          return `Player 1 is on square ${this.playerOne}`;
        case 51:
          this.playerOne = 67;
          return `Player 1 is on square ${this.playerOne}`;
        case 62:
          this.playerOne = 19;
          return `Player 1 is on square ${this.playerOne}`;
        case 64:
          this.playerOne = 60;
          return `Player 1 is on square ${this.playerOne}`;
        case 71:
          this.playerOne = 91;
          return `Player 1 is on square ${this.playerOne}`;
        case 74:
          this.playerOne = 53;
          return `Player 1 is on square ${this.playerOne}`;
        case 78:
          this.playerOne = 98;
          return `Player 1 is on square ${this.playerOne}`;
        case 87:
          this.playerOne = 94;
          return `Player 1 is on square ${this.playerOne}`;
        case 89:
          this.playerOne = 68;
          return `Player 1 is on square ${this.playerOne}`;
        case 92:
          this.playerOne = 88;
          return `Player 1 is on square ${this.playerOne}`;
        case 95:
          this.playerOne = 75;
          return `Player 1 is on square ${this.playerOne}`;
        case 99:
          this.playerOne = 80;
          return `Player 1 is on square ${this.playerOne}`;
        case 100:
          this.turn = 0;
          return `Player 1 Wins!`;
        default:
          if (this.playerOne > 100) {
            this.playerOne = 100 - (this.playerOne - 100);
            if (this.playerOne === 99) {
              this.playerOne = 80;
            }
            if (this.playerOne === 95) {
              this.playerOne = 75;
            }
            if (this.playerOne === 92) {
              this.playerOne = 88;
            }
            return `Player 1 is on square ${this.playerOne}`;
          }
          return `Player 1 is on square ${this.playerOne}`;
      }
    } else {
      if (die1 !== die2) {
        this.turn = 1;
      }
      this.playerTwo += die1 + die2;
      switch (this.playerTwo) {
        case 2:
          this.playerTwo = 38;
          return `Player 2 is on square ${this.playerTwo}`;
        case 7:
          this.playerTwo = 14;
          return `Player 2 is on square ${this.playerTwo}`;
        case 8:
          this.playerTwo = 31;
          return `Player 2 is on square ${this.playerTwo}`;
        case 15:
          this.playerTwo = 26;
          return `Player 2 is on square ${this.playerTwo}`;
        case 16:
          this.playerTwo = 6;
          return `Player 2 is on square ${this.playerTwo}`;
        case 21:
          this.playerTwo = 42;
          return `Player 2 is on square ${this.playerTwo}`;
        case 28:
          this.playerTwo = 84;
          return `Player 2 is on square ${this.playerTwo}`;
        case 36:
          this.playerTwo = 44;
          return `Player 2 is on square ${this.playerTwo}`;
        case 46:
          this.playerTwo = 25;
          return `Player 2 is on square ${this.playerTwo}`;
        case 49:
          this.playerTwo = 11;
          return `Player 2 is on square ${this.playerTwo}`;
        case 51:
          this.playerTwo = 67;
          return `Player 2 is on square ${this.playerTwo}`;
        case 62:
          this.playerTwo = 19;
          return `Player 2 is on square ${this.playerTwo}`;
        case 64:
          this.playerTwo = 60;
          return `Player 2 is on square ${this.playerTwo}`;
        case 71:
          this.playerTwo = 91;
          return `Player 2 is on square ${this.playerTwo}`;
        case 74:
          this.playerTwo = 53;
          return `Player 2 is on square ${this.playerTwo}`;
        case 78:
          this.playerTwo = 98;
          return `Player 2 is on square ${this.playerTwo}`;
        case 87:
          this.playerTwo = 94;
          return `Player 2 is on square ${this.playerTwo}`;
        case 89:
          this.playerTwo = 68;
          return `Player 2 is on square ${this.playerTwo}`;
        case 92:
          this.playerTwo = 88;
          return `Player 2 is on square ${this.playerTwo}`;
        case 95:
          this.playerTwo = 75;
          return `Player 2 is on square ${this.playerTwo}`;
        case 99:
          this.playerTwo = 80;
          return `Player 2 is on square ${this.playerTwo}`;
        case 100:
          this.turn = 0;
          return `Player 2 Wins!`;
        default:
          if (this.playerTwo > 100) {
            this.playerTwo = 100 - (this.playerTwo - 100);
            if (this.playerTwo === 99) {
              this.playerTwo = 80;
            }
            if (this.playerTwo === 95) {
              this.playerTwo = 75;
            }
            if (this.playerTwo === 92) {
              this.playerTwo = 88;
            }
            return `Player 2 is on square ${this.playerTwo}`;
          }
          return `Player 2 is on square ${this.playerTwo}`;
      }
    }
  }
}
