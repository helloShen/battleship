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

describe('Test initPlayers(), againstAI() and againstHuman().', () => {
  beforeAll(() => {
    Game.initPlayers(HUMAN, HUMAN);
  });
  test('After initPlayers(), should have two HUMAN player.', () => {
    expect(Game.game.players.length).toBe(2);
    expect(Game.players().length).toBe(2);
    expect(Game.player(0)).toBeTruthy();
    expect(Game.player(1)).toBeTruthy();
    expect(Game.player(0).isAI()).toBe(false);
    expect(Game.player(1).isAI()).toBe(false);
  });
  test('Call againstAi(). Player 2 should be AI. It\'s board should be autofilled with 5 ships.', () => {
    Game.againstAI(HARD);
    expect(Game.player(1).isAI()).toBe(true);
    expect(Game.player(1).board().fleetSize()).toBe(5);
    expect(Game.player(1).aiLevel()).toBe(HARD);
  });
  test('Call againstHuman(). Player 2 should be HUMAN. It\'s board should be empty.', () => {
    Game.againstHuman();
    expect(Game.player(1).isAI()).toBe(false);
    expect(Game.player(1).board().fleetSize()).toBe(0);
  });
});

describe('Test start(), nextTurn().', () => {
  beforeAll(() => {
    Game.initPlayers(HUMAN, AI);
  });
  test('After init() and autofill human players board, start() should return true. And currentPlayer should be 0(humanPlayer). Then call nextTurn(), aiPlayer will give a random shot, and callback humanPlayer\'s turn.', () => {
    const humanPlayer = Game.player(0);
    const aiPlayer = Game.player(1);
    expect(Game.start()).toBe(false);
    Game.autofillFleet(humanPlayer.board());
    expect(humanPlayer.board().fleetSize()).toBe(5);
    expect(Game.start(EASY)).toBe(true);
    expect(Game.game.currentPlayer).toBe(0);
    Game.nextTurn(); // aiPlayer plays his turn and callback humanPlayer's turn.
    expect(Game.game.currentPlayer).toBe(0); // Still humanPlayer turn.
    expect(humanPlayer.board().intact().length).toBe(99); // received 1 attack.
  });
});
