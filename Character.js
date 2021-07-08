class Character {
    constructor(hp, dmg, status, mana) {
      this.hp = hp;
      this.dmg = dmg;
      this.status = status;
      this.mana = mana;
    }



    takedamage(damage) {
        if (this.hp > 0){
            this.hp = this.hp - damage;
          } else {
            console.log(`${this.name} est déjà mort, choisissez un autre joueur à attaquer s'il vous plaît !`)
          }
        }

        dealDamage = (victim) => {
            if (this.dmg > victim.hp){
              this.mana = this.mana + 20;
              console.log(`${this.name} vous gagnez 20 mana pour avoir tué ${victim.name}, bravo !`)
            }
            if (this.status != "loser"){
              console.log(victim)
              victim.takedamage(this.dmg);
              console.log(`Le joueur ${this.name} attaque le joueur ${victim.name} et cause ${this.dmg} dommages !`)
              console.log(victim.name + " a désormais " + victim.hp + " HP !")
            }
        }
}