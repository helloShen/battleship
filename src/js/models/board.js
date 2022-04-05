// import Ship from './ship';

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
   * Check if the new ship sits in the fixed ship's forbiden zone.
   * @param {Ship} fixedShip The ship already put on the board.
   * @param {Array} newHead Head position[row, column] of the new ship.
   * @param {Array} newTail Tail position[row, column] of the new ship.
   * @return {Boolean} true if these two ships have overlap each other, otherwise false.
   */
  function isOverlap(fixedShip, newHead, newTail) {
    const [headRow, headColumn] = fixedShip.head();
    const [tailRow, tailColumn] = fixedShip.tail();
    const overlapRowStart = Math.max(0, headRow - 1);
    const overlapColumnStart = Math.max(0, headColumn - 1);
    const overlapRowEnd = Math.min(board.size - 1, tailRow + 1);
    const overlapColumnEnd = Math.min(board.size - 1, tailColumn + 1);
    if (newHead[0] - newTail[0] === 0) {
      if (newHead[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
      if (newTail[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
      return true;
    }
    if (newHead[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
    if (newTail[0] < overlapColumnStart || newHead[0] > overlapRowEnd) return false;
    return true;
  }

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
    const newHead = [row, column];
    const newTail = (ship.isHorizontal())
      ? [row, column + ship.size()] : [row + ship.size(), column];
    if (board.fleet.any((fixedShip) => isOverlap(fixedShip, newHead, newTail))) return false;
    // legal position to put a new ship
    ship.put(row, column);
    board.fleet.push(ship);
    return true;
  }

  // function receiveAttack(row, column) {

  // }

  return {
    putShip,
    // receiveAttack,
  };
};
