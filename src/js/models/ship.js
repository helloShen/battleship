/**
 * Make sure to comment the follow line out when finish the unit test.
 */
const UNIT_TEST = true;

/**
 * Factory function to instantiate a Ship object.
 * @param {String} name Name of the ship. Ex: battleship, cruiser, submarine, and destroyer.
 * @param {Number} size How many grids on the board the ship occupies.
 * @return A ship module object.
 */
export default (name, size) => {
  const HORIZONTAL = Symbol('horizontal');
  const VERTICAL = Symbol('vertical');

  /**
   * plain object representing a ship on board.
   */
  const ship = {
    name,
    size,
    head: {}, // Initialized as an empty grid
    direction: HORIZONTAL, // default
    hit: 0, // How many times the ship is hit.
  };

  /**
   * Our ships are not aware of the size of the game board.
   * Board module will check the validation for us.
   * @param {Grid} grid Location of the head of the ship.
   */
  function put(grid) {
    ship.head = grid;
  }

  /**
   * HORIZONTAL -> VERTICAL
   * VERTICAL -> HORIZONTAL
   * Ship don't have to worry about if the board has enough space.
   * Board module will check that for us before call this function.
   */
  function toggleDirection() {
    if (ship.direction === HORIZONTAL) {
      ship.direction = VERTICAL;
    } else {
      ship.direction = HORIZONTAL;
    }
  }

  /**
   * Assertion: Each grid of the board can only be attecked once.
   * The ship don't have to worry about wheather a single part is hit twice.
   * @param {Grid} grid The grid object attacked by opponent.
   * @return {Boolean} true if the ship is hit, otherwise false.
   */
  function hit(grid) {
    const targetRow = grid.row();
    const targetColumn = grid.column();
    const shipRow = ship.head.row();
    const shipColumn = ship.head.column();
    switch (ship.direction) {
      case HORIZONTAL:
        if (targetRow !== shipRow) return false;
        if (targetColumn < shipColumn || targetColumn > shipColumn + ship.size) return false;
        break;
      case VERTICAL:
        if (targetColumn !== shipColumn) return false;
        if (targetRow < shipRow || targetRow > shipRow + ship.size) return false;
        break;
      default:
        break;
    }
    ship.hit += 1;
    return true;
  }

  /**
   * Check if every port the ship has been hit.
   * As always, the ship don't have to worry about wheather a single part is hit twice.
   * @returns {Boolean}
   */
  function isSunk() {
    return (ship.hit >= ship.size);
  }

  const api = {
    put,
    toggleDirection,
    hit,
    isSunk,
  };

  // Unit tests need these private members to work with.
  if (UNIT_TEST) {
    api.ship = ship;
    api.HORIZONTAL = HORIZONTAL;
    api.VERTICAL = VERTICAL;
  }

  return {
    ...api,
  };
};
