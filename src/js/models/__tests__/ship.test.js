/* eslint-disable no-undef */
import Ship from '../ship';

describe('Construct a new Cruiser in size of 3.', () => {
  const cruiser = Ship('cruiser', 3);
  test('getId() should return 1', () => {
    expect(cruiser.id()).toBe(1);
  });
  test('getName() should return "cruiser"', () => {
    expect(cruiser.name()).toBe('cruiser');
  });
  test('getSize() should return 3.', () => {
    expect(cruiser.size()).toBe(3);
  });
  test('getPosition()', () => {
    expect(cruiser.position()).toEqual([0, 0]);
  });
  test('isHorizontal() should return true.', () => {
    expect(cruiser.isHorizontal()).toBe(true);
  });
  test('countHits() should return 0', () => {
    expect(cruiser.countHits()).toBe(0);
  });
  test('Put the cruiser head at grid{row: 1, column: 3}.', () => {
    const row = 1;
    const column = 3;
    cruiser.put(row, column);
    const [shipRow, shipColumn] = cruiser.position();
    expect(shipRow).toBe(row);
    expect(shipColumn).toBe(column);
  });
  test('Attack [1,3] can hit.', () => {
    expect(cruiser.hit(1, 3)).toBe(true);
  });
  test('Ship not sunk yet.', () => {
    expect(cruiser.isSunk()).toBe(false);
  });
  test('Attack [2,3] cannot hit.', () => {
    expect(cruiser.hit(2, 3)).toBe(false);
  });
  test('Attack [1,4] can hit.', () => {
    expect(cruiser.hit(1, 4)).toBe(true);
  });
  test('Ship not sunk yet.', () => {
    expect(cruiser.isSunk()).toBe(false);
  });
  test('Attack [1,5] can hit.', () => {
    expect(cruiser.hit(1, 5)).toBe(true);
  });
  test('Ship is sunk now.', () => {
    expect(cruiser.isSunk()).toBe(true);
  });
  test('Attack [1,6] will miss.', () => {
    expect(cruiser.hit(1, 6)).toBe(false);
  });
  test('Toggle ship direction from HORIZONTAL to VERTICAL', () => {
    cruiser.toggleDirection();
    expect(cruiser.isHorizontal()).toBe(false);
  });
  test('Attack [1,3] can still hit after toggle.', () => {
    expect(cruiser.hit(1, 3)).toBe(true);
  });
  test('Attack [2,3] can hit after toggle.', () => {
    expect(cruiser.hit(2, 3)).toBe(true);
  });
  test('Attack [1,4] will miss after toggle.', () => {
    expect(cruiser.hit(1, 4)).toBe(false);
  });
  test('Attack [3,3] can hit.', () => {
    expect(cruiser.hit(3, 3)).toBe(true);
  });
  test('Attack [4,3] is always miss.', () => {
    expect(cruiser.hit(4, 3)).toBe(false);
  });
  test('Toggle ship direction from VERTICAL back to HORIZONTAL', () => {
    cruiser.toggleDirection();
    expect(cruiser.isHorizontal()).toBe(true);
  });
});
