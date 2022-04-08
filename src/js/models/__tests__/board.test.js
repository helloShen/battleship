/* eslint-disable no-undef */
import Board from '../board';
import Ship from '../ship';

let smallBoard;
let board;

const cruiser = Ship('cruiser', 3); // horizontal
const carrier = Ship('carrier', 5); // horizontal
const submarine = Ship('submarine', 2); // vertical
submarine.toggleDirection();

describe('Create a small 2 * 2 board.', () => {
  test('Size of smallBoard should be 2.', () => {
    smallBoard = Board(2);
    expect(smallBoard.board.size).toBe(2);
    expect(smallBoard.size()).toBe(2);
  });
  test('Has 4 intacted grids.', () => {
    expect(smallBoard.intact().length).toBe(4);
  });
});

describe('Create a board of default size 10 * 10.', () => {
  test('size === 10', () => {
    board = Board();
    expect(board.size()).toBe(10);
  });
});

describe('Put the first horizontal cruiser of size 3 at [2, 3]', () => {
  test('board.fleet should have one ship.', () => {
    board.putShip(2, 3, cruiser);
    expect(board.board.fleet.length).toBe(1);
    expect(board.fleetSize()).toBe(1);
  });
});

describe('Test available().', () => {
  test('Want to put the horizontal carrier in size of 5 at [3, 1]. board.available() should return false', () => {
    expect(board.available(3, 1, carrier)).toBe(false);
  });
  test('Want to put the horizontal carrier in size of 5 at [4, 1]. board.available() should return true', () => {
    expect(board.available(4, 1, carrier)).toBe(true);
  });
  test('Want to put the vertical submarine in size of 2 at [2, 1]. board.available() should return true', () => {
    expect(board.available(2, 1, submarine)).toBe(true);
  });
});

describe('Test putShip().', () => {
  test('After put the submarine at [2, 1], board.fleet should have 2 ships now.', () => {
    board.putShip(2, 1, submarine);
    expect(board.board.fleet.length).toBe(2);
    expect(board.fleetSize()).toBe(2);
  });
  test('Now position [4, 1] is no longer available for carrier.', () => {
    expect(board.available(4, 1, carrier)).toBe(false);
  });
});

describe('Test toggleFleetShip().', () => {
  test('Try to toggle submarine, will fail.', () => {
    expect(board.toggleFleetShip(submarine)).toBe(false);
  });
  test('Try to toggle cruiser, will succeed.', () => {
    expect(board.toggleFleetShip(cruiser)).toBe(true);
    expect(cruiser.isHorizontal()).toBe(false);
    board.toggleFleetShip(cruiser);
  });
});

describe('Test removeShip().', () => {
  test('Remove carrier from the board. board.fleet has only one ship.', () => {
    board.removeShip(submarine);
    expect(board.board.fleet.length).toBe(1);
  });
});

describe('Test board.receiveAttack(), alreadyHit(), alreadyMissed().', () => {
  test('Attack [2, 3] should hit.', () => {
    expect(board.receiveAttack(2, 3)).toBe(true);
    expect(board.board.hits.length).toBe(1);
    expect(board.board.fleet[0].countHits()).toBe(1);
  });
  test('Check hit history, alreadyHit(2, 3) should return true. alreadyMissed(2, 3) should return false', () => {
    expect(board.alreadyHit(2, 3)).toBe(true);
    expect(board.alreadyMissed(2, 3)).toBe(false);
  });
  test('Attack [2, 4] should hit.', () => {
    expect(board.receiveAttack(2, 4)).toBe(true);
    expect(board.board.hits.length).toBe(2);
    expect(board.board.fleet[0].countHits()).toBe(2);
  });
  test('Check hit history, alreadyHit(2, 4) should return true. alreadyMissed(2, 4) should return false.', () => {
    expect(board.alreadyHit(2, 4)).toBe(true);
    expect(board.alreadyMissed(2, 4)).toBe(false);
  });
  test('Attack [2, 5] should hit.', () => {
    expect(board.receiveAttack(2, 5)).toBe(true);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Check hit history, alreadyHit(2, 5) should return true. alreadyMissed(2, 4) should return false.', () => {
    expect(board.alreadyHit(2, 5)).toBe(true);
    expect(board.alreadyMissed(2, 5)).toBe(false);
  });
  test('Attack [2, 6] should miss.', () => {
    expect(board.receiveAttack(2, 6)).toBe(false);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.misses.length).toBe(1);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Check hit history, alreadyHit(2, 6) should return false, alreadyMissed(2, 6) should return true.', () => {
    expect(board.alreadyHit(2, 6)).toBe(false);
    expect(board.alreadyMissed(2, 6)).toBe(true);
  });
  test('Attack [3, 5] should miss.', () => {
    expect(board.receiveAttack(3, 5)).toBe(false);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.misses.length).toBe(2);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Check hit history, alreadyHit(3, 5) should return false, alreadyMissed(3, 5) should return true.', () => {
    expect(board.alreadyHit(3, 5)).toBe(false);
    expect(board.alreadyMissed(3, 5)).toBe(true);
  });
  test('Attack [3, 5] again, nothing happens.', () => {
    expect(board.receiveAttack(3, 5)).toBeUndefined();
    expect(board.board.hits.length).toBe(3);
    expect(board.board.misses.length).toBe(2);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
});

describe('Test allSunk().', () => {
  test('Now all ships are sunk.', () => {
    expect(board.allSunk()).toBe(true);
  });
});
