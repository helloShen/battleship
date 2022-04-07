/* eslint-disable no-unused-vars */
import Ship from './ship';
import Board from './board';
import Player, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from './player';

let UNIT_TEST;
// eslint-disable-next-line prefer-const
UNIT_TEST = true; // Comment out this line once finish the unit tests.

export default (() => {
  const DEFAULT_BOARD_SIZE = 10; // default game board size
  // Default fleet setting. According to 1990's Battleship Game of Milton Bradlet Company.
  const STANDARD_FLEET = [
    // [name, size]
    ['carrier', 5],
    ['battleship', 4],
    ['cruiser', 3],
    ['submarine', 3],
    ['destroyer', 2],
  ];

  /**
   * Game module proto.
   *  players: Array. Two players.
   *  currentPlayer: Number. Index of current player in the players array.
   */
  const game = {};

  /**
   * Generate a integer in range of [0, max).
   * @param {Number} max Max value (exclusive).
   * @return Generated integer.
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  /**
   * Pick the random position [row, column] in the board.
   * @param {Board} board Target board.
   * @return Random position.
   */
  function randomPosition(board) {
    return [random(board.size()), random(board.size())];
  }

  /**
   * Autofill(randomly) a game board with fleet ships.
   * @param {Board} board Target board.
   */
  function autofillFleet(board) {
    STANDARD_FLEET.forEach((template) => {
      const ship = Ship(...template);
      if (random(2) === 1) ship.toggleDirection();
      let position = randomPosition(board);
      while (!board.available(...position, ship)) {
        position = randomPosition(board);
      }
      board.putShip(...position, ship);
    });
  }

  /**
   * Return an array of all players.
   * @returns Array of players
   */
  function players() {
    return game.players;
  }

  /**
   * Search Player object by their id.
   * @param {Number} id player id.
   */
  function player(id) {
    return game.players.find((thePlayer) => thePlayer.id() === id);
  }

  /**
   * Initialize two players with empty board.
   * Currently is 1 human player against 1 AI player.
   * AI player's board is filled automatically.
   */
  function init() {
    const humanPlayer = Player(0, Board(DEFAULT_BOARD_SIZE), HUMAN);
    const aiPlayer = Player(1, Board(DEFAULT_BOARD_SIZE), AI);
    autofillFleet(aiPlayer.board());
    game.players = [
      humanPlayer,
      aiPlayer,
    ];
  }

  /**
   * Get next player's index.
   * @returns index of next player
   */
  function nextIndex() {
    return (game.currentPlayer + 1) % game.players.length;
  }

  /**
   * Recursion: pass this function to Player.attack() function as callback.
   * When AI player callback, automatically go to next turn.
   * Human player doesn't callback.
   */
  function nextTurn() {
    game.currentPlayer = nextIndex();
    const currPlayer = game.players[game.currentPlayer];
    const opponent = game.players[nextIndex()];
    currPlayer.attack(opponent.board(), nextTurn);
  }

  /**
   * When player has,
   *  1. put all his ships into the board.
   *  2. picked the level of his/her AI opponent's level.
   * Controller call this method to initialize the game.
   *
   * Before start the game this function will check
   * wheather all requirements above have been met.
   *
   * @return {Boolean}
   *  true, if all requirements has been met, the game is started.
   *  otherwise, false.
   */
  function start(level) {
    // check configurations
    if (game.players.some((thePlayer) => thePlayer.board().fleetSize()
        !== STANDARD_FLEET.length)) {
      return false;
    }
    if (!level) return false;
    // set AI level if exists.
    const index = game.players.findIndex((thePlayer) => thePlayer.isAI());
    if (index !== -1) {
      game.players[index].setAiLevel(level);
    }
    // Start game.
    // Set to the last player. nextTurn() will move on.
    game.currentPlayer = game.players.length - 1;
    nextTurn();
    return true;
  }

  const api = {
    DEFAULT_BOARD_SIZE,
    players,
    player,
    autofillFleet,
    nextTurn,
    init,
    start,
  };

  if (UNIT_TEST) {
    api.game = game;
  }

  return {
    ...api,
  };
})();
