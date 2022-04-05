import Ship from './ship';

const DEFAULT_BOARD_SIZE = 10;

/**
 * Create a 10 * 10 game board.
 * Board magages Ships, and check the hit for user.
 */
export default (size) => {
  const board = {
    // eslint-disable-next-line no-bitwise
    size: size | DEFAULT_BOARD_SIZE,
    fleet: [],
    sunk: [],
    hits: [],
    misses: [],
  };

  /**
   * Put ship at that position if it's legal.
   * @param {Number} row Axi Y of the ship head.
   * @param {Number} column Axi X of the ship head.
   * @param {Ship} ship The ship object.
   * @return {Boolean} true if this position is legal for a new ship, otherwise false.
   */
  function putShip(row, column, ship) {
    // check head
    if (row < 0
      || row >= board.size
      || column < 0
      || column >= board.size) {
      return false;
    }
    // check tail
    const tailRow = (ship.isHorizontal()) ? row : (row + ship.size() - 1);
    const tailColumn = (ship.isHorizontal()) ? (column + ship.size() - 1) : column;
    if (tailRow < 0
      || tailRow >= board.size
      || tailColumn < 0
      || tailColumn >= board.size) {
      return false;
    }
    // check overlap
    if (board.fleet.any((ship) => {

    })) {
      return false;
    }
  }

  function receiveAttack(row, column) {

  }

  return {
    putShip,
    receiveAttack,
  };
};
