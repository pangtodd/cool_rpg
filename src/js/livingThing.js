export default class LivingThing {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }
}

var diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
}
  LivingThing.prototype.heroStartingStats = function() {
    this.health = diceRoll() * 2
    this.attackPower = diceRoll()
  };
  
  LivingThing.prototype.attackValue = function () {
  return this.attackPower;
};
  const villain1 = new LivingThing("gorsh", 3, 2)
  const villain2 = new LivingThing("mish", 5, 4)



  // checkType() {
  //   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
  //     return "not a triangle";
  //   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
  //     return "scalene triangle";
  //   }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
  //     return "equilateral triangle";
  //   } else {
  //     return "isosceles triangle";
  //   }
  // }    
