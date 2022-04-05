/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Player, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  DIFFICULT,
} from '../player';
import Board from '../board';

const board = Board(2);
const aiPlayer = Player(AI, EASY);
const humanPlayer = Player(HUMAN);
const mockCallback = jest.fn();

describe('1 AI player and 1 human player created.', () => {
  test('aiPlayer type is AI, level is EASY.', () => {
    expect(aiPlayer.isAI()).toBe(true);
    expect(aiPlayer.aiLevel()).toBe(EASY);
  });
  test('humanPlayer type is HUMAN.', () => {
    expect(humanPlayer.isAI()).toBe(false);
  });
});

describe('humanPlayer attack first.', () => {
  test('it should not invoke callback function.', () => {
    humanPlayer.attack(board, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(0);
  });
  test('board still has 4 intact grids (2 * 2 board).', () => {
    expect(board.board.size).toBe(2);
    expect(board.board.intact.length).toBe(4);
  });
});

describe('aiPlayer attack now.', () => {
  test('aiPlayer is in type of AI.', () => {
    expect(aiPlayer.isAI()).toBe(true);
  });
  test('After attack, callback function should be invoked this time.', () => {
    aiPlayer.attack(board, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
  test('3 intact grids left in board.', () => {
    expect(board.board.intact.length).toBe(3);
  });
});
