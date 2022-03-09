export default class LivingThing {
  constructor(name, health, battleHealth, attackPower) {
    this.name = name;
    this.health = health;
    this.battleHealth = battleHealth;
    this.attackPower = attackPower;
  }
}

var diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
}

LivingThing.prototype.heroStartingStats = function() {
  this.health = diceRoll() * 2
  this.attackPower = diceRoll()
  this.battleHealth = this.health
};
  
LivingThing.prototype.attackValue = function () {
return this.attackPower + diceRoll();
};

LivingThing.prototype.heal = function() {
  if (this .battleHeath >= this.health){
    this.battleHealth = this.health
  }else if (this.battleHealth >= 10) {
      let healPoints = this.battleHealth * .25
      this.battleHealth = healPoints + this.battleHealth
  } else if (this.battleHealth <=9) {
      let healPoints = this.battleHealth * .5
      this.battleHealth = healPoints + this.battleHealth
  }
};

  // const villain1 = new LivingThing("gorsh", 3, 2)
  // const villain2 = new LivingThing("mish", 5, 4)

  // if (this.battleHeath > this.health){
  //   this.battleHealth = this.health
  //   console.log("You cannot heal at this time")
  // }


  // LivingThing.prototype.heal = function() {
  //   if (this .battleHeath >= this.health){
  //     this.battleHealth = this.health
  //   }else{
  //   console.log("You cannot heal at this time")
    
    
    
  //   if (this.battleHealth >= 10) {
  //       let healPoints = this.battleHealth * .25
  //       this.battleHealth = healPoints + this.battleHealth
  //   } else if (this.battleHealth <=9) {
  //       let healPoints = this.battleHealth * .5
  //       this.battleHealth = healPoints + this.battleHealth
  //   }
  // };