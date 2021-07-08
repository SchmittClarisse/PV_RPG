class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.assassin = assassin;
    this.berzerker = berzerker;
    this.turnLeft = turnLeft;
  }

  newTurn = () =>{
    gaming.startTurn();
    this.turnLeft--;
  }

  watchStats = () =>{
    console.log("");
    if(paladin.status == "loser"){
      console.log("Le Paladin " + paladin.name + " est mort... RIP !")
    } else{
      console.log("Le Paladin " + paladin.name + " à "+ paladin.hp + " HP" + " et " + paladin.mana + " Mana")
    }
    
    if(monk.status == "loser"){
      console.log("Le Monk " + monk.name + " est mort... RIP !")
    } else{
      console.log("Le Monk " + monk.name + " à "+ monk.hp + " HP" + " et " + monk.mana + " Mana")
    }

    if(assassin.status == "loser"){
      console.log("L'Assassin " + assassin.name + " est mort... RIP !")
    } else{
      console.log("L'Assassin " + assassin.name + " à "+ assassin.hp + " HP" + " et " + assassin.mana + " Mana")
    }

    if(berzerker.status == "loser"){
      console.log("Le Berzerker " + berzerker.name + " est mort... RIP !")
    } else{
      console.log("Le Berzerker " + berzerker.name + " à "+ berzerker.hp + " HP" + " et " + berzerker.mana + " Mana")
    }

    if(fighter.status == "loser"){
      console.log("Le Fighter " + fighter.name + " est mort... RIP !")
    } else{
      console.log("Le Fighter " + fighter.name + " à "+ fighter.hp + " HP" + " et " + fighter.mana + " Mana")
    }
  }
}


const game1 = new Game (paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker]