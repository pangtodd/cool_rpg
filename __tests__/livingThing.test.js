import LivingThing from '../src/js/livingThing';

describe('LivingThing', () => {

  test('should correctly create a LivingThing object with three attributes', () => {
    const livingThingOne = new LivingThing("name", 100, 80);
    expect(livingThingOne.name).toEqual("name");
    expect(livingThingOne.health).toEqual(100);
    expect(livingThingOne.attackPower).toEqual(80);
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