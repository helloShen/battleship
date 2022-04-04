/* eslint-disable no-undef */
import Ship from '../ship';

describe('Construct a new Cruiser {name: cruiser, size: 3}', () => {
  const cruiser = Ship('cruiser', 3);
  test('Put the cruiser head at grid{row: 1, column: 3}.', () => {
    const mockGrid = { row: 1, column: 3 };
    cruiser.put(mockGrid);
    expect(cruiser.ship.head).toEqual(mockGrid);
  });
  test('Toggle ship direction from HORIZONTAL to VERTICAL, then to HORIZONTAL again.', () => {
    expect(cruiser.ship.direction).toBe(cruiser.HORIZONTAL);
    cruiser.toggleDirection();
    expect(cruiser.ship.direction).toBe(cruiser.VERTICAL);
    cruiser.toggleDirection();
    expect(cruiser.ship.direction).toBe(cruiser.HORIZONTAL);
  });
});
