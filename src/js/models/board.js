let UNIT_TEST;
// eslint-disable-next-line prefer-const
UNIT_TEST = true; // Comment out this line after unit test.

const DEFAULT_BOARD_SIZE = 10;

/**
 * Board factory function.
 * Board magages Ships, and check the hit for user.
 * @param {Number} inSize Size of the game board.
 */
export default (inSize) => {
  /**
   * Board plain object.
   */
  const board = {
    // eslint-disable-next-line no-bitwise
    size: inSize || DEFAULT_BOARD_SIZE,
    fleet: [],
    hits: [],
    misses: [],
    intact: [],
  };

  /**
   * Allow other modules to check the size of the board.
   * @returns Board size.
   */
  function size() {
    return board.size;
  }

  /**
   * Allow other modules to get the list of all intact position.
   */
  function intact() {
    return board.intact;
  }

  /**
   * Retrieve a ship in fleet by id.
   * @param {Number} id Ship id.
   * @return The ship object if exists. Otherwise undefined.
   */
  function getShip(id) {
    return board.fleet.find((ship) => ship.id() === id);
  }

  /**
   * Allow other modules to check size of current fleet.
   */
  function fleetSize() {
    return board.fleet.length;
  }

  /**
   * Delete all ships in fleet.
   */
  function clearFleet() {
    board.fleet = [];
  }

  /**
   * Return the body coordinates of all ships in fleet.
   */
  function shipCoordinates() {
    return board.fleet.reduce((arr, fleetShip) => {
      arr.push(fleetShip.coordinates());
      return arr;
    }, []);
  }

  /**
   * Check if the number is located in range of board size.
   * @param {Number} num Number to check
   * @returns true if in board, otherwise false.
   */
  function legal(num) {
    return num >= 0 && num < board.size;
  }

  /**
   * Get an array of coordinates of the surrounding points of
   * that ship.
   * @param {Number} shipId Ship id.
   * @return {Array} Coordinates of the surrounding points of
   * that ship.
   */
  function shipSurroundingArea(shipId) {
    const result = [];
    const ship = getShip(shipId);
    const [ulRow, ulCol] = ship.head();
    const [brRow, brCol] = ship.tail();
    let blRow;
    let blCol;
    let urRow;
    let urCol;
    if (ship.isHorizontal()) {
      [blRow, blCol] = ship.head();
      [urRow, urCol] = ship.tail();
    } else {
      [blRow, blCol] = ship.tail();
      [urRow, urCol] = ship.head();
    }
    if (ulRow - 1 >= 0) {
      for (let i = ulCol - 1; i <= urCol + 1; i += 1) {
        if (legal(i)) result.push([ulRow - 1, i]);
      }
    }
    if (blRow + 1 < board.size) {
      for (let i = blCol - 1; i <= brCol + 1; i += 1) {
        if (legal(i)) result.push([blRow + 1, i]);
      }
    }
    if (ulCol - 1 >= 0) {
      for (let i = ulRow; i <= blRow; i += 1) {
        result.push([i, ulCol - 1]);
      }
    }
    if (urCol + 1 < board.size) {
      for (let i = urRow; i <= brRow; i += 1) {
        result.push([i, urCol + 1]);
      }
    }
    return result;
  }

  /**
   * Initialize the board, put all intact position into board.intact array.
   * The position [row, column] is coded as: "row-column".
   */
  function fillIntact() {
    for (let row = 0; row < board.size; row += 1) {
      for (let column = 0; column < board.size; column += 1) {
        board.intact.push(`${row}-${column}`);
      }
    }
  }

  /**
   * Remove a specific point from the board.intact array.
   * @param {String} positonStr Position string.
   */
  function removeFromIntact(positionStr) {
    const index = board.intact.findIndex((position) => position === positionStr);
    if (index === -1) return;
    board.intact.splice(index, 1);
  }

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
    if (newHead[0] - newTail[0] === 0) { // is horizontal
      if (newHead[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
      if (newTail[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
      return true;
    }
    if (newHead[1] < overlapColumnStart || newHead[1] > overlapColumnEnd) return false;
    if (newTail[0] < overlapRowStart || newHead[0] > overlapRowEnd) return false;
    return true;
  }

  /**
   * Check if the target position[row, column] is available for a specific ship.
   * @param {Number} row Target row.
   * @param {Number} column Target column.
   * @param {Ship} ship The ship to be put into the board.
   * @return {Boolean} true if is ok, otherwise false.
   */
  function available(row, column, ship) {
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
    const newTail = [tailRow, tailColumn];
    if (board.fleet.some((fixedShip) => isOverlap(fixedShip, newHead, newTail))) return false;
    return true;
  }

  /**
   * Put ship into a certain position if it's available.
   * @param {Number} row Axi Y of the ship head.
   * @param {Number} column Axi X of the ship head.
   * @param {Ship} ship The ship object.
   * @return {Boolean} true if this position is legal for a new ship, otherwise false.
   */
  function putShip(row, column, ship) {
    ship.put(row, column);
    board.fleet.push(ship);
  }

  /**
   * Remove a ship from the board fleet (only if it's already in the fleet).
   * @param {Ship} Ship to be removed.
   */
  function removeShip(ship) {
    const index = board.fleet.findIndex((fleetShip) => fleetShip.id() === ship.id());
    if (index === -1) return;
    board.fleet.splice(index, 1);
  }

  /**
   * Only used to toggle ships already in the fleet.
   * @param {Ship} ship Target ship.
   * @return {Boolean} true if toggled, otherwise false.
   */
  function toggleFleetShip(ship) {
    removeShip(ship);
    ship.toggleDirection();
    if (available(...ship.head(), ship)) {
      putShip(...ship.head(), ship);
      return true;
    }
    // cannot toggle
    ship.toggleDirection(); // back to orginal direction
    putShip(...ship.head(), ship); // put back to fleet
    return false;
  }

  /**
   * Check if two position[row, column] equal to each other.
   * @param {Array} positionA [row, column]
   * @param {Array} positionB [row, column]
   * @returns true if equal, otherwise false.
   */
  function positionEqual(positionA, positionB) {
    return (positionA[0] === positionB[0]) && (positionA[1] === positionB[1]);
  }

  /**
   * Check wheather the target position has been hit before.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if target has been hit before, otherwise false.
   */
  function alreadyHit(row, column) {
    return board.hits.some((hit) => positionEqual(hit, [row, column]));
  }

  /**
   * Check wheather the target position has been attacked
   * but it was a miss.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if it was a miss, otherwise false.
   */
  function alreadyMissed(row, column) {
    return board.misses.some((miss) => positionEqual(miss, [row, column]));
  }

  /**
   * Check wheather the target exists in attack history board.hits or board.misses.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if target has been attacked before, otherwise false.
   */
  function alreadyBeenAttacked(row, column) {
    return alreadyHit(row, column) || alreadyMissed(row, column);
  }

  /**
   * Actually try to hit a ship.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns {Number}
   *  return ship id if hit.
   *  return -1 if miss.
   */
  function tryHitShip(row, column) {
    let hit = -1;
    board.fleet.forEach((fleetShip) => {
      if (fleetShip.hit(row, column)) hit = fleetShip.id();
    });
    return hit;
  }

  /**
   * Check if the attack can hit a ship.
   * This function doesn't actually hit ship.
   * @param {Number} row Axi Y of target grid.
   * @param {Number} column Axi X of target grid.
   * @returns true if can hit, otherwise false.
   */
  function canHitShip(row, column) {
    return board.fleet.some((fleetShip) => fleetShip.canHit(row, column));
  }

  /**
   * Try to hit each of the ships in the board.fleet,
   * only if the target position has never been attacked before.
   * @param {Number} row AxiY of target.
   * @param {Number} column AxiX of target.
   * @return {Number}
   *  if hit, return the ship's id.
   *  return -1 if missed.
   *  return undefined, if already been attacked before.
   */
  function receiveAttack(row, column) {
    const target = [row, column];
    // Must be undefined. If return false, will be considered as a miss.
    if (alreadyBeenAttacked(...target)) return undefined;
    const hit = tryHitShip(row, column);
    if (hit !== -1) {
      board.hits.push(target);
    } else {
      board.misses.push(target);
    }
    removeFromIntact(`${row}-${column}`);
    return hit;
  }

  /**
   * Check if all ships are sunk.
   * @returns true if all ships are sunk, otherwise false.
   */
  function allSunk() {
    return board.fleet.every((fleetShip) => fleetShip.isSunk());
  }

  /**
   * Initialize the board.
   */
  fillIntact();

  /**
   * Public API
   */
  const api = {
    size,
    intact,
    getShip,
    fleetSize,
    clearFleet,
    shipCoordinates,
    shipSurroundingArea,
    available,
    putShip,
    removeShip,
    toggleFleetShip,
    alreadyHit,
    alreadyMissed,
    alreadyBeenAttacked,
    canHitShip,
    receiveAttack,
    allSunk,
  };

  /**
   * API only for unit test.
   */
  if (UNIT_TEST) {
    api.board = board;
  }

  return {
    ...api,
  };
};
