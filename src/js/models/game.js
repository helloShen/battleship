/* eslint-disable import/first */
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
// audio resources
import Hit from '../../assets/audio/hit.wav';
import Miss from '../../assets/audio/deepBubble.wav';
import Sunk from '../../assets/audio/sunkExplosion.wav';
import Click from '../../assets/audio/click.wav';
import GameStart from '../../assets/audio/gameStart.wav';
import Win from '../../assets/audio/win.wav';
import Lose from '../../assets/audio/lose.wav';

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
  const HitAudio = new Audio(Hit);
  const MissAudio = new Audio(Miss);
  const SunkAudio = new Audio(Sunk);
  const ClickAudio = new Audio(Click);
  const GameStartAudio = new Audio(GameStart);
  const WinAudio = new Audio(Win);
  const LoseAudio = new Audio(Lose);

  /**
   * Game module proto.
   *  players: Array. Two players.
   *  currentPlayer: Number. Index of current player in the players array.
   */
  const game = {};

  function playHitAudio() {
    HitAudio.currentTime = 0;
    HitAudio.play();
  }

  function playMissAudio() {
    MissAudio.currentTime = 0;
    MissAudio.play();
  }

  function playSunkAudio() {
    SunkAudio.currentTime = 0;
    SunkAudio.play();
  }

  function playClickAudio() {
    ClickAudio.currentTime = 0;
    ClickAudio.play();
  }

  function playGameStartAudio() {
    GameStartAudio.currentTime = 0;
    GameStartAudio.play();
  }

  function playWinAudio() {
    WinAudio.currentTime = 0;
    WinAudio.play();
  }

  function playLoseAudio() {
    LoseAudio.currentTime = 0;
    LoseAudio.play();
  }

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
  function randomPosition(size) {
    return [random(size), random(size)];
  }

  /**
   * Autofill(randomly) a game board with fleet ships.
   * @param {Board} board Target board.
   */
  function autofillFleet(board) {
    STANDARD_FLEET.forEach((template) => {
      const ship = Ship(...template);
      if (random(2) === 1) ship.toggleDirection();
      let position = randomPosition(board.size());
      while (!board.available(...position, ship)) {
        position = randomPosition(board.size());
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
   * @return {Player} Player object if exists.
   */
  function player(id) {
    return game.players.find((thePlayer) => thePlayer.id() === id);
  }

  /**
   * Return current player object.
   * @returns {Player} Current player object.
   */
  function currentPlayer() {
    return game.players[game.currentPlayer];
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
   * AI Player's attack function only decides where to attack,
   * and callback controller to do the rest of the job.
   * @param {Boolean} passToNextPlayer
   *  true if switch player.
   *  false doesn't switch player.
   * @param {Function} controllerAttackCallback Actual attack
   * logic in Controller module.
   */
  function nextTurn(passToNextPlayer, controllerAttackCallback) {
    if (passToNextPlayer) game.currentPlayer = nextIndex();
    const currPlayer = game.players[game.currentPlayer];
    if (!currPlayer.isAI()) return; // human player do nothing.
    const opponent = game.players[nextIndex()];
    const target = currPlayer.attack(opponent.board()); // AI player's next attack target
    if (target) { // if there's no more grid to be attacked, target will be undefined.
      setTimeout(() => controllerAttackCallback(...target, opponent.id()), 500);
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
    playHitAudio,
    playMissAudio,
    playSunkAudio,
    playClickAudio,
    playGameStartAudio,
    playWinAudio,
    playLoseAudio,
    players,
    player,
    currentPlayer,
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
