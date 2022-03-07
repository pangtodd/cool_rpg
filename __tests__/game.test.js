import Game from '../src/js/game';

describe('Game', () => {

  test('should correctly create a Game object with one attribute', () => {
    const livingThingOne = new LivingThing("name", 100, 80);
    expect(livingThingOne.name).toEqual("name");