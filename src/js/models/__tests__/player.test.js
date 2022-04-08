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

const humanPlayer = Player(0, Board(2), HUMAN);
const aiPlayer = Player(1, Board(2), AI, EASY);
const mockCallback = jest.fn();

describe('1 AI player and 1 human player created.', () => {
  test('aiPlayer type is AI, level is EASY.', () => {
    expect(aiPlayer.isAI()).toBe(true);
    expect(aiPlayer.aiLevel()).toBe(EASY);
  });
  test('humanPlayer id is 0', () => {
    expect(humanPlayer.id()).toBe(0);
  });
  test('aiPlayer id is 1', () => {
    expect(aiPlayer.id()).toBe(1);
  });
  test('humanPlayer type is HUMAN.', () => {
    expect(humanPlayer.isAI()).toBe(false);
  });
  test('aiPlayer type is AI.', () => {
    expect(aiPlayer.isAI()).toBe(true);
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
  test('it should invoke callback function.', () => {
    humanPlayer.attack(aiPlayer.board(), mockCallback);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0]).toBeUndefined();
  });
});

describe('aiPlayer attack now.', () => {
  test('After attack, callback function should be invoked this time.', () => {
    aiPlayer.attack(humanPlayer.board(), mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[1].length).toBe(2);
  });
});
