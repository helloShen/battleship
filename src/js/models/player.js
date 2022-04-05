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
export const DIFFICULT = Symbol('difficult');

/**
 * Player factory function.
 * Player attack 1 time for each turn.
 */
export default (inType, inLevel) => {
  /**
   * Player plain object.
   */
  const player = {
    type: inType,
  };

  if (player.type === AI) {
    player.level = inLevel || EASY; // default is EASY
  }

  function isAI() {
    return player.type === AI;
  }

  function aiLevel() {
    if (player.type !== AI) return undefined;
    return player.level;
  }

  function randomAttack(board) {
    if (board.intact().length === 0) return false;
    const index = Math.floor(Math.random() * board.intact().length);
    const str = board.intact()[index];
    const [rowStr, columnStr] = str.split('-');
    board.receiveAttack(parseInt(rowStr, 10), parseInt(columnStr, 10));
    return true;
  }

  function normalAttack(board) {
    return randomAttack(board);
  }

  function smartAttck(board) {
    return randomAttack(board);
  }

  /**
   * ==> AI player will attack immediately,
   * then callback game module to go to next round.
   * ==> Human player will do nothing.
   * It will not callback game module to go to the next round.
   * @param {Board} board The Board object.
   * @param {Function} callback Notice Game module to run next round.
   */
  function attack(board, callback) {
    if (player.type === AI) {
      switch (player.level) {
        case EASY:
          randomAttack(board);
          break;
        case NORMAL:
          normalAttack(board);
          break;
        case DIFFICULT:
          smartAttck(board);
          break;
        default:
          randomAttack(board);
          break;
      }
      callback();
    }
  }

  return {
    isAI,
    aiLevel,
    attack,
  };
};
