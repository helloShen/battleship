/* eslint-disable no-undef */
import Board from '../board';
import Ship from '../ship';

let smallBoard;
let board;

// horizontal
const cruiser = Ship('cruiser', 3);
// horizontal
const carrier = Ship('carrier', 5);
// vertical
const submarine = Ship('submarine', 2);
submarine.toggleDirection();

describe('Create a small 2 * 2 board.', () => {
  test('Size of smallBoard should be 2.', () => {
    smallBoard = Board(2);
    expect(smallBoard.board.size).toBe(2);
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
  });
});

describe('Test board.available(), board.putShip() and board.removeShip()', () => {
  test('Want to put the horizontal carrier in size of 5 at [3, 1]. board.available() should return false', () => {
    expect(board.available(3, 1, carrier)).toBe(false);
  });
  test('Want to put the horizontal carrier in size of 5 at [4, 1]. board.available() should return true', () => {
    expect(board.available(4, 1, carrier)).toBe(true);
  });
  test('Want to put the vertical submarine in size of 2 at [2, 1]. board.available() should return true', () => {
    expect(board.available(2, 1, submarine)).toBe(true);
  });
  test('After put the submarine at [2, 1], board.fleet should have 2 ships now.', () => {
    board.putShip(2, 1, submarine);
    expect(board.board.fleet.length).toBe(2);
  });
  test('Now position [4, 1] is no longer available for carrier.', () => {
    expect(board.available(4, 1, carrier)).toBe(false);
  });
  test('Remove carrier from the board. board.fleet has only one ship.', () => {
    board.removeShip(submarine);
    expect(board.board.fleet.length).toBe(1);
  });
});

describe('Test board.receiveAttack().', () => {
  test('Attack [2, 3] should hit.', () => {
    board.receiveAttack(2, 3);
    expect(board.board.hits.length).toBe(1);
    expect(board.board.fleet[0].countHits()).toBe(1);
  });
  test('Attack [2, 4] should hit.', () => {
    board.receiveAttack(2, 4);
    expect(board.board.hits.length).toBe(2);
    expect(board.board.fleet[0].countHits()).toBe(2);
  });
  test('Attack [2, 5] should hit.', () => {
    board.receiveAttack(2, 5);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Attack [2, 6] should miss.', () => {
    board.receiveAttack(2, 6);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.misses.length).toBe(1);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Attack [3, 5] should miss.', () => {
    board.receiveAttack(3, 5);
    expect(board.board.hits.length).toBe(3);
    expect(board.board.misses.length).toBe(2);
    expect(board.board.fleet[0].countHits()).toBe(3);
  });
  test('Attack [3, 5] again, nothing happens.', () => {
    board.receiveAttack(3, 5);
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
