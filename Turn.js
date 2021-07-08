class Turn {

startTurn(playerState){
     //lister les joureurs
   console.log("Qui veux-tu attaquer ?")
   playerState.forEach((character,index) => {
    console.log(`${index + 1 } : joueur${index} a ${character.hp} hp`)
    });
    let choice = prompt("Quel joueur veux-tu attaquer ? 1 ou 2");
    //console.log("choice =",choice)
    switch(choice){
        case "1":
            console.log("tu veux attaquer le joueur 1");
            //attaque
            playerState[0].dealdamage(playerState[0])
            break
        case "2":
             console.log("tu veux attaquer le joueur 2")
             //attaque
             playerState[0].dealdamage(playerState[1])
             break
    }
    playerState.forEach((character,index) => {
        console.log(`${index + 1 } : joueur${index} a ${character.hp} hp`)
    });
    return playerState

}};