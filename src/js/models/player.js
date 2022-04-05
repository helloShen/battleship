/**
 * There are two different types of player:
 *  1. ai
 *  2. human
 */
const AI = Symbol('ai');
const HUMAN = Symbol('human');

/**
 * Three different level of AI.
 */
const EASY = Symbol('child');
const NORMAL = Symbol('normal');
const DIFFICULT = Symbol('difficult');

/**
 * Player factory function.
 * Player attack 1 time for each turn.
 */
export default (type, level) => {
  /**
   * Player plain object.
   */
  const player = {
    type,
  };

  if (type === AI) {
    // eslint-disable-next-line no-bitwise
    player.level = level | EASY; // default is EASY
  }

  function randomAttack(board) {
    const r = Math.floor(Math.random() * board.intact().length);
    const str = board.intact()[r];
    const [rowStr, columnStr] = str.split('-');
    board.receiveAttack(parseInt(rowStr, 10), parseInt(columnStr, 10));
  }

  function normalAttack(board) {
    randomAttack(board);
  }

  function smartAttck(board) {
    randomAttack(board);
  }

  /**
   * AI player will attack immediately, and return true.
   * Human player will do nothing but return false.
   * @return true if attack is executed, otherwise false.
   */
  function attack(board) {
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
      return true;
    }
    return false;
  }

  return {
    AI,
    HUMAN,
    EASY,
    NORMAL,
    DIFFICULT,
    attack,
  };
};
