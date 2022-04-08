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
   * Ship plain object.
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
   * Just check if there's a ship sits on a certain grid.
   * This function doesn't actually hit the ship.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if it's a hit, otherwise false.
   */
  function canHit(row, column) {
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
    return true;
  }

  /**
   * Assertion: Each grid of the board can only be attecked once.
   * The ship don't have to worry about wheather a single part is hit twice.
   * @param {Number} row Axi X of opponent's attack.
   * @param {Number} column Axi Y of opponent's attack.
   * @return {Boolean} true if the ship is hit, otherwise false.
   */
  function hit(row, column) {
    const result = canHit(row, column);
    if (result) ship.hit += 1;
    return result;
  }

  /**
   * Check if every port the ship has been hit.
   * As always, the ship don't have to worry about wheather a single part is hit twice.
   * @returns {Boolean}
   */
  function isSunk() {
    return (ship.hit >= ship.size);
  }

  /**
   * @return An array of coordinates of that ship.
   */
  function coordinates() {
    const result = [];
    for (let i = 0; i < ship.size; i += 1) {
      if (ship.direction === HORIZONTAL) {
        result.push([ship.row, ship.column + i]);
      } else {
        result.push([ship.row + i, ship.column]);
      }
    }
    return result;
  }

  /**
   * @return
   *  if is sunk, return an array of coordinates of that ship.
   *  otherwise, return undefined.
   */
  function reportSunk() {
    if (!isSunk) return undefined;
    return coordinates();
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
    canHit,
    hit,
    isSunk,
    coordinates,
    reportSunk,
  };
};
