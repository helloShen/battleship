/**
 * Ship id generator.
 */
function* infinite() {
  let index = 1;
  while (true) {
    yield index;
    index += 1;
  }
}

const GEN = infinite();
const HORIZONTAL = Symbol('horizontal');
const VERTICAL = Symbol('vertical');

/**
 * Factory function to instantiate a Ship object.
 * @param {String} name Name of the ship. Ex: battleship, cruiser, submarine, and destroyer.
 * @param {Number} size How many grids on the board the ship occupies.
 * @return A ship module object.
 */
export default (inName, inSize) => {
  /**
   * plain object representing a ship on board.
   */
  const ship = {
    id: GEN.next().value,
    name: inName,
    size: inSize,
    row: 0, // default
    column: 0, // default
    direction: HORIZONTAL, // default
    hit: 0, // How many times the ship is hit.
  };

  /**
   * @returns Ship's id.
   */
  function id() {
    return ship.id;
  }

  /**
   * @returns Ship's name.
   */
  function name() {
    return ship.name;
  }

  /**
   * @returns Size of the ship.
   */
  function size() {
    return ship.size;
  }

  /**
   * @returns Position of the ship head.
   */
  function head() {
    return [ship.row, ship.column];
  }

  /**
   * @return Position of the ship tail.
   */
  function tail() {
    switch (ship.direction) {
      case HORIZONTAL:
        return [ship.row, ship.column + ship.size - 1];
      case VERTICAL:
        return [ship.row + ship.size - 1, ship.column];
      default:
        return undefined;
    }
  }

  /**
   * Check the direction of the ship.
   * @returns true if the direction is horizontal, otherwise false.
   */
  function isHorizontal() {
    return ship.direction === HORIZONTAL;
  }

  /**
   * @returns Return how many attacks the ship has taken.
   */
  function countHits() {
    return ship.hit;
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
   * Our ships are not aware of the size of the game board.
   * Board module will check the validation for us.
   * @param {Number} row Axi Y of the head of the ship.
   * @param {Number} column Axi X of the head of the ship.
   */
  function put(row, column) {
    ship.row = row;
    ship.column = column;
  }

  /**
   * Assertion: Each grid of the board can only be attecked once.
   * The ship don't have to worry about wheather a single part is hit twice.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if the ship is hit, otherwise false.
   */
  function hit(row, column) {
    switch (ship.direction) {
      case HORIZONTAL:
        if (row !== ship.row) return false;
        if (column < ship.column || column > (ship.column + ship.size - 1)) return false;
        break;
      case VERTICAL:
        if (column !== ship.column) return false;
        if (row < ship.row || row > (ship.row + ship.size - 1)) return false;
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

  return {
    id,
    size,
    name,
    head,
    tail,
    isHorizontal,
    countHits,
    toggleDirection,
    put,
    hit,
    isSunk,
  };
};
