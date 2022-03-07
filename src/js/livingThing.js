export default class LivingThing {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

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
}