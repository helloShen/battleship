/* eslint-disable quote-props */
/**
 * There are two different types of player:
 *  1. ai
 *  2. human
 */
export const AI = Symbol('ai');
export const HUMAN = Symbol('human');

/**
 * Three different level of AI.
 */
export const EASY = Symbol('child');
export const NORMAL = Symbol('normal');
export const HARD = Symbol('hard');

/**
 * Player factory function.
 * @param {Board} inBoard Player's game board.
 * @param {Symbol} inType HUMAN or AI.
 * @param {Symbol} inLevel Optional. AI level.
 */
export default (inId, inBoard, inType, inLevel) => {
  /**
   * Player plain object.
   */
  const player = {
    id: inId,
    type: inType,
    board: inBoard,
    lastHit: [], // memorize hits (sunk ship's coordinates will be removed)
  };

  if (player.type === AI) {
    player.level = inLevel || NORMAL; // default is NORMAL
  }

  /**
   * Get player id.
   * @returns Player id.
   */
  function id() {
    return player.id;
  }

  /**
   * Check player type.
   * @returns true if is player is AI.
   */
  function isAI() {
    return player.type === AI;
  }

  /**
   * Check AI player's level.
   * @returns AI player's level. undefined if it's not AI player.
   */
  function aiLevel() {
    if (player.type !== AI) return undefined;
    return player.level;
  }

  /**
   * Allow Game module to set AI level.
   * @param {Symbol} level EASY or NORMAL or HARD
   */
  function setAiLevel(level) {
    if (player.type !== AI) return;
    player.level = level;
  }

  /**
   * Get the player's board object.
   * @returns Player's board object.
   */
  function board() {
    return player.board;
  }

  /**
   * Randomly pick a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */
  function randomAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return undefined;
    const index = Math.floor(Math.random() * opponentBoard.intact().length);
    const str = opponentBoard.intact()[index];
    const [rowStr, columnStr] = str.split('-');
    return [parseInt(rowStr, 10), parseInt(columnStr, 10)];
  }

  /**
   * Calculate the distance of two points.
   * Distance = Horizontal distance + Vertical distance.
   * @param {Number} rowA
   * @param {Number} columnA
   * @param {Number} rowB
   * @param {Number} columnB
   * @return {Number} Distance of point A and B.
   */
  function distance(row, column) {
    return player.lastHit.reduce((dist, hit) => {
      const y = Math.abs(row - hit[0]);
      const x = Math.abs(column - hit[1]);
      return dist + x + y;
    }, 0);
  }

  /**
   * Calculate the distance of an intact point with all last hit(sunk
   * ship coordinates will be removed).
   * Return the intact point with the smallest distance.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */
  function normalAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return undefined;
    if (player.lastHit.length === 0) return randomAttack(opponentBoard);
    let minDistance = Number.MAX_VALUE;
    return opponentBoard.intact().reduce((arr, str) => {
      const [rowStr, columnStr] = str.split('-');
      const row = parseInt(rowStr, 10);
      const column = parseInt(columnStr, 10);
      const dist = distance(row, column);
      if (dist < minDistance) {
        minDistance = dist;
        return [row, column];
      }
      return arr;
    }, []);
  }

  /**
   * Pick(with a smart strategy) a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */
  function smartAttck(opponentBoard) {
    return randomAttack(opponentBoard);
  }

  /**
   * @param {Board} board The Board object.
   * @param {Function} callback Notice Game module to run next round.
   * @return
   *  ==> AI player return the coordinate of the target it wants to attack.
   *  ==> Human player will return undefined.
   */
  function attack(opponentBoard) {
    if (player.type === AI) {
      switch (player.level) {
        case EASY:
          return randomAttack(opponentBoard);
        case NORMAL:
          return normalAttack(opponentBoard);
        case HARD:
          return smartAttck(opponentBoard);
        default:
          return randomAttack(opponentBoard);
      }
    }
    return undefined; // human player return undefined
  }

  function memorizeLastHit(row, column) {
    player.lastHit.push([row, column]);
  }

  function forgetLastHit(shipCoordinates) {
    shipCoordinates.forEach((coordinate) => {
      const index = player.lastHit.findIndex((point) => (point[0] === coordinate[0])
        && (point[1] === coordinate[1]));
      if (index !== -1) player.lastHit.splice(index, 1);
    });
  }

  return {
    id,
    isAI,
    aiLevel,
    setAiLevel,
    board,
    attack,
    memorizeLastHit,
    forgetLastHit,
  };
};
