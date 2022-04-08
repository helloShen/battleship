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
  };

  if (player.type === AI) {
    player.level = inLevel || EASY; // default is EASY
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
   * Pick(with normal strategy) a target from opponent board's intact list.
   * @param {Board} opponentBoard Oppoenent's board object.
   * @returns the target coordinate
   */
  function normalAttack(opponentBoard) {
    return randomAttack(opponentBoard);
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

  return {
    id,
    isAI,
    aiLevel,
    setAiLevel,
    board,
    attack,
  };
};
