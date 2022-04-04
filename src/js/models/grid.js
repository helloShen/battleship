/**
 * Factory function to instantiate a grid object.
 * A grid on a board is represented by its [x, y] coordinate.
 * [5, A] refers to the grid at row 4 & column 0.
 * @param {Number} x horizontal coordinate
 * @param {Number} y vertical coordinate
 */
export default (xAxis, yAxis) => {
  /**
   * If input is a String, convert it to Number.
   * @param {Number|String} num input value
   * @returns Number value
   */
  function toNumber(num) {
    return (typeof num === 'number') ? num : parseInt(num, 10);
  }

  /**
   * 0 -> 'A', 1 -> 'B', etc.
   * For our game, column will always be in [A-J].
   * @param {Number} num
   * @returns String
   */
  function toLetter(num) {
    return String.fromCharCode(num + 'A'.charCodeAt(0));
  }

  const grid = {
    row: toNumber(xAxis),
    column: toNumber(yAxis),
  };

  grid.id = `${grid.row + 1}${toLetter(grid.column)}`;

  function id() {
    return grid.id;
  }

  function row() {
    return grid.row;
  }

  function column() {
    return grid.column;
  }

  function coordinates() {
    return [grid.row, grid.column];
  }

  return {
    id,
    row,
    column,
    coordinates,
  };
};
