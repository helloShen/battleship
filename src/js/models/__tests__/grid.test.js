/* eslint-disable no-undef */
import Grid from '../grid';

describe('Constructor input (2, 1), ', () => {
  const grid = Grid(2, 1);

  test('id() return "3B"', () => {
    expect(grid.id()).toEqual('3B');
  });

  test('row() return 2', () => {
    expect(grid.row()).toBe(2);
  });

  test('column() return 1', () => {
    expect(grid.column()).toBe(1);
  });

  test('coordinates() return [2, 1]', () => {
    expect(grid.coordinates()).toEqual([2, 1]);
  });
});
