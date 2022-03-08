import Game from '../src/js/game';

describe('Game', () => {

  test('should correctly create a Game object with one attribute', () => {
    let hero = {name: "hero", health: 100, attackPower: 80};
    let gameOne = new Game(hero);
    expect(gameOne.livingThings).toEqual(hero);
  });
}

