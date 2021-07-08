class Game {
    constructor(turnLeft = 10) {
      this.turnLeft = turnLeft;
      this.currentState = [];
    }
    play(){
      while(this.turnLeft != 0){
        this.newTurn()
      }
    }
    newTurn() {
      this.turnLeft = this.turnLeft - 1;
      let currentTurn = new Turn();
      let newState = currentTurn.startTurn(this.currentState);
      this.currentState = newState
    }
};

const gameNew = new Game();

gameNew.currentState.push(character1);
gameNew.currentState.push(character2);
gameNew.currentState.push(character3);

gameNew.play();