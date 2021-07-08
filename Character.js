class Character {
    constructor(hp, dmg) {
        this.hp = hp;
        this.dmg = dmg;
    }



    takedamage(damage) {
        this.hp = this.hp - damage;
    }

    dealdamage(victim) {
        console.log('method deal damage called')
        victim.takedamage(this.dmg);
    }
};

const character1 = new Character(20,5)
const character2 = new Character(12,8)
const character3 = new Character(30,4)