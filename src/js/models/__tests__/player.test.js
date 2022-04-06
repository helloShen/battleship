/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Player, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from '../player';
import Board from '../board';

const aiPlayer = Player(Board(2), AI, EASY);
const humanPlayer = Player(Board(2), HUMAN);
const mockCallback = jest.fn();

describe('1 AI player and 1 human player created.', () => {
  test('aiPlayer type is AI, level is EASY.', () => {
    expect(aiPlayer.isAI()).toBe(true);
    expect(aiPlayer.aiLevel()).toBe(EASY);
  });
  test('humanPlayer type is HUMAN.', () => {
    expect(humanPlayer.isAI()).toBe(false);
  });
  test('Both players\'s board is truthy.', () => {
    expect(aiPlayer.board()).toBeTruthy();
    expect(humanPlayer.board()).toBeTruthy();
  });
  test('Set AI player to HARD level.', () => {
    aiPlayer.setAiLevel(HARD);
    expect(aiPlayer.aiLevel()).toBe(HARD);
  });
});

describe('humanPlayer attack first.', () => {
  test('it should not invoke callback function.', () => {
    humanPlayer.attack(aiPlayer.board(), mockCallback);
    expect(mockCallback.mock.calls.length).toBe(0);
  });
  test('board still has 4 intact grids (2 * 2 board).', () => {
    expect(aiPlayer.board().board.size).toBe(2);
    expect(aiPlayer.board().board.intact.length).toBe(4);
  });
});

describe('aiPlayer attack now.', () => {
  test('After attack, callback function should be invoked this time.', () => {
    aiPlayer.attack(humanPlayer.board(), mockCallback);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test('3 intact grids left in board.', () => {
    expect(humanPlayer.board().board.intact.length).toBe(3);
  });
});
