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

export {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
};

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
   * Initialize two players with randomly autofilled board.
   * AI player's default level is EASY.
   * @param {Symbol} player1Type HUMAN or AI
   * @param {Symbol} player2Type HUMAN or AI
   */
  function initPlayersAndBoards(player1Type, player2Type) {
    game.players = [];
    const playerTypes = [player1Type, player2Type];
    for (let i = 0; i < playerTypes.length; i += 1) {
      const newPlayer = Player(i, Board(DEFAULT_BOARD_SIZE), playerTypes[i]);
      autofillFleet(newPlayer.board());
      game.players.push(newPlayer);
    }
  }

  /**
   * Switch the player 2 to AI.
   * It can also be used to change AI level.
   * AI player's board is filled automatically.
   */
  function againstAI(level) {
    game.players[1] = Player(1, Board(DEFAULT_BOARD_SIZE), AI, level);
    autofillFleet(game.players[1].board());
  }

  /**
   * Switch the player 2 to HUMAN.
   */
  function againstHuman() {
    game.players[1] = Player(1, Board(DEFAULT_BOARD_SIZE), HUMAN);
  }

  /**
   * Get next player's index.
   * @returns index of next player
   */
  function nextIndex() {
    return (game.currentPlayer + 1) % game.players.length;
  }

  /**
   * If is human player, do nothing(wait for human to click
   * on the board to trigger an attack event).
   *
   * AI Player's attack function only makes a dicision of
   * where to attack, and callback controller to do the
   * rest of the job.
   */
  function nextTurn(controllerAttackCallback) {
    game.currentPlayer = nextIndex();
    const currPlayer = game.players[game.currentPlayer];
    if (!currPlayer.isAI()) return; // human player do nothing.
    const opponent = game.players[nextIndex()];
    const target = currPlayer.attack(opponent.board()); // AI player's next attack target
    if (target) { // if there's no more grid to be attacked, target will be undefined.
      controllerAttackCallback(...target, opponent.id());
    }
  }

  /**
   * When player has put all his ships into the board.
   * Controller call this method to initialize the game.
   *
   * Before start the game this function will check
   * wheather all requirements above have been met.
   *
   * @return {Boolean}
   *  true, if all requirements have been met, the game is started.
   *  otherwise, false.
   */
  function start() {
    // check configurations
    if (game.players.some((thePlayer) => thePlayer.board().fleetSize()
        !== STANDARD_FLEET.length)) {
      return false;
    }
    // Start game.
    // Set to the last player. nextTurn() will move on.
    game.currentPlayer = game.players.length - 1;
    return true;
  }

  const api = {
    DEFAULT_BOARD_SIZE,
    players,
    player,
    autofillFleet,
    nextTurn,
    initPlayersAndBoards,
    againstAI,
    againstHuman,
    start,
  };

  if (UNIT_TEST) {
    api.game = game;
  }

  return {
    ...api,
  };
})();
