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
export default (inBoard, inType, inLevel) => {
  /**
   * Player plain object.
   */
  const player = {
    type: inType,
    board: inBoard,
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

  function randomAttack(opponentBoard) {
    if (opponentBoard.intact().length === 0) return false;
    const index = Math.floor(Math.random() * opponentBoard.intact().length);
    const str = opponentBoard.intact()[index];
    const [rowStr, columnStr] = str.split('-');
    opponentBoard.receiveAttack(parseInt(rowStr, 10), parseInt(columnStr, 10));
    return true;
  }

  function normalAttack(opponentBoard) {
    return randomAttack(opponentBoard);
  }

  function smartAttck(opponentBoard) {
    return randomAttack(opponentBoard);
  }

  /**
   * ==> AI player will attack immediately,
   * then callback game module to go to next round.
   * ==> Human player will do nothing.
   * It will not callback game module to go to the next round.
   * @param {Board} board The Board object.
   * @param {Function} callback Notice Game module to run next round.
   */
  function attack(opponentBoard, callback) {
    if (player.type === AI) {
      switch (player.level) {
        case EASY:
          randomAttack(opponentBoard);
          break;
        case NORMAL:
          normalAttack(opponentBoard);
          break;
        case HARD:
          smartAttck(opponentBoard);
          break;
        default:
          randomAttack(opponentBoard);
          break;
      }
      callback();
    }
  }

  return {
    isAI,
    aiLevel,
    setAiLevel,
    board,
    attack,
  };
};
