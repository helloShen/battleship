/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Ship from '../ship';
import Board from '../board';
import Player, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from '../player';
import Game from '../game';

describe('Test autoFillFleet()', () => {
  test('After autofill, fleet in board should have five ships.', () => {
    const board = Board(10);
    Game.autofillFleet(board);
    expect(board.board.fleet.length).toBe(5);
    // eslint-disable-next-line no-console
    board.board.fleet.forEach((ship) => console.log(`${ship.head()}, size = ${ship.size()}, horizontal: ${ship.isHorizontal()}`));
  });
});

describe('Test init()', () => {
  test('After init(), should have two player, 1 HUMAN, 1 AI. And AI player\'s board should be autofilled with 5 ships.', () => {
    Game.init();
    expect(Game.game.players.length).toBe(2);
    expect(Game.players()).toBe(2);
    const humanPlayer = Game.player(0);
    const aiPlayer = Game.player(1);
    expect(humanPlayer).toBeTruthy();
    expect(aiPlayer).toBeTruthy();
    expect(humanPlayer.isAI()).toBe(false);
    expect(aiPlayer.isAI()).toBe(true);
    expect(aiPlayer.board().board.fleet.length).toBe(5);
  });
});

describe('Test start(), nextTurn().', () => {
  test('After init() and autofill human players board, start() should return true. And currentPlayer should be 0(humanPlayer). Then call nextTurn(), aiPlayer will give a random shot, and callback humanPlayer\'s turn.', () => {
    Game.init();
    const humanPlayer = Game.game.players[0];
    const aiPlayer = Game.game.players[1];
    expect(Game.start(EASY)).toBe(false);
    Game.autofillFleet(humanPlayer.board());
    expect(humanPlayer.board().board.fleet.length).toBe(5);
    expect(Game.start(EASY)).toBe(true);
    expect(Game.game.currentPlayer).toBe(0);
    Game.nextTurn(); // aiPlayer plays his turn and callback humanPlayer's turn.
    expect(Game.game.currentPlayer).toBe(0); // Still humanPlayer turn.
    expect(humanPlayer.board().intact().length).toBe(99); // received 1 attack.
  });
});
