import LivingThing from '../src/js/livingThing';

describe('LivingThing', () => {

  test('should correctly create a LivingThing object with three attributes', () => {
    const livingThingOne = new LivingThing("name", 100, 100, 80);
    expect(livingThingOne.name).toEqual("name");
    expect(livingThingOne.health).toEqual(100);
    expect(livingThingOne.battleHealth).toEqual(100);
    expect(livingThingOne.attackPower).toEqual(80);
  });
  test('should correctly add a random number to the health & attack power', () => {
    // const dieRollHealth = new LivingThing.heroStartingStats();
    const dieRollHealth = new LivingThing;
    dieRollHealth.heroStartingStats();
    expect(dieRollHealth.health).toBeLessThan(13);
    expect(dieRollHealth.attackPower).toBeLessThan(7);
  });
  test('should correctly add a die roll to the attackPower', () => {
    // const dieRollHealth = new LivingThing.heroStartingStats();
    const playerAttack = new LivingThing("hero2", 4, 4, 5);
    expect(playerAttack.attackValue()).toBeLessThan(13);
  });
  test('should correctly adjust battleHealth, depending on current battleHealth', () => {
    const playerHeal = new LivingThing("hero2", 4, 4, 5);
    playerHeal.heal();
    expect(playerHeal.battleHealth).toEqual(6);
  }); 
});




//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });

//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });

//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isocTriangle = new Triangle(5,5,7)
//     expect(isocTriangle.checkType()).toEqual("isosceles triangle");
//   });

//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });

// });