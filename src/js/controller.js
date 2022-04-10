import Game, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from './models/game';
import View, {
  MAIN,
  OPPONENT,
} from './view';

export {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
  MAIN,
  OPPONENT,
};

export default (() => {
  /**
   * Initialize 2 players with randomly autofilled board
   * before starting to draw the board.
   */
  function initPlayersAndBoards(player1Type, player2Type) {
    Game.initPlayersAndBoards(player1Type, player2Type);
  }

  /**
   * Call View module to draw the board of a certain player.
   * @param {Player} player Player object.
   * @param {Symbol} mainOrOpponent As Main player or opponent.
   */
  function drawASingleBoard(player, mainOrOpponent) {
    View.drawBoard(
      Game.DEFAULT_BOARD_SIZE,
      player.id(),
      mainOrOpponent,
      player.board().canHitShip,
    );
  }

  /**
   * Draw two boards in perspective of one player.
   *  1. His own board (MAIN).
   *  2. Opponent's board (OPPONENT).
   *
   * @param {Number} playerId Player's id.
   */
  function drawBoardsForPlayer(playerId) {
    drawASingleBoard(Game.player(playerId), MAIN);
    const opponentId = (playerId + 1) % Game.players().length;
    drawASingleBoard(Game.player(opponentId), OPPONENT);
  }

  /**
   * Remove both main and opponent's board from the DOM.
   */
  function clearAllBoards() {
    View.clearAllBoards();
  }

  /**
   * Gameover logic.
   */
  function gameover(winnerId) {
    // eslint-disable-next-line no-alert
    alert(`${winnerId} win!`);
  }

  /**
   * Actual attack logic.
   * 1. Attack the target spot.
   * 2. Render the view according to the attack result.
   * 3. Return a list of surrounding points if this attack
   * cause a ship to sink.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @return {Array}
   *  Return undefined if spot already been attacked.
   *  A list of surrounding points if a ship is sunk after this attack.
   *  Otherwise, return an empty array.
   */
  function playerAttackOneSpot(row, column, opponentId) {
    const board = Game.player(opponentId).board();
    let surroundings = [];
    // attack
    if (board.alreadyBeenAttacked(row, column)) return undefined;
    const shipId = board.receiveAttack(row, column);
    // render attacked spot
    View.renderSeaAfterAttack(row, column, opponentId, shipId);
    if (shipId !== -1 && board.getShip(shipId).isSunk()) { // hit a ship
      View.renderSunkShips(opponentId, board.getShip(shipId).coordinates());
      surroundings = board.shipSurroundingArea(shipId);
    }
    return surroundings;
  }

  /**
   * Attack the target spot. If a ship sink after this attack, it will automatically
   * attack the surrounding area of that ship (no other ship can stay in that area).
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   */
  function playerAttack(row, column, opponentId) {
    const surroundings = playerAttackOneSpot(row, column, opponentId);
    if (surroundings === undefined) return; // spot already been attacked.
    if (surroundings.length > 0) {
      surroundings.forEach((coordinate) => playerAttackOneSpot(...coordinate, opponentId));
    }
    if (Game.player(opponentId).board().allSunk()) {
      gameover(Game.currentPlayer().id());
      return;
    }
    Game.nextTurn(playerAttack); // pass itself to the Game module as a callback.
  }

  /**
   * Pass the attack logic to the View module as a callback.
   */
  function enableBoardReceiveAttack() {
    View.bindReceiveAttack(playerAttack);
  }

  /**
   * Create new random fleet for the player, and re-draw the board on DOM.
   * @param {Number} playerId The player id.
   */
  function randomAgain(mainOrOpponent, playerId) {
    // generate random fleet for that player
    const board = Game.player(playerId).board();
    board.clearFleet();
    Game.autofillFleet(board);
    // clear the old board(main or opponent) from the DOM.
    View.clearBoard(mainOrOpponent);
    // draw a new board on DOM
    drawASingleBoard(Game.player(playerId), mainOrOpponent);
  }

  function enableRandomFleet() {
    View.bindRandomFleet(randomAgain);
  }

  /**
   * Lock all boards, prevent player from interact with the board
   * before starting the game.
   */
  function lockOpponentBoard() {
    View.lockOpponentBoard();
  }

  /**
   * Once the game is prepared, unlock all boards, so that player gain
   * the access to the board.
   */
  function unlockOpponentBoard() {
    View.unlockOpponentBoard();
  }

  /**
   * Initialize a new game.
   * The game is not yet started.
   * Have to call startGame() to start.
   */
  function initGame() {
    clearAllBoards();
    initPlayersAndBoards(HUMAN, AI);
    drawBoardsForPlayer(0); // in human player's perspective
    lockOpponentBoard();
    enableBoardReceiveAttack();
    enableRandomFleet();
  }

  /**
   * Start the game, and unlock opponent's board.
   */
  function startGame() {
    Game.start();
    Game.nextTurn(playerAttack); // pass itself to the Game module as a callback.
    unlockOpponentBoard();
  }

  return {
    initPlayersAndBoards,
    drawASingleBoard,
    drawBoardsForPlayer,
    clearAllBoards,
    enableBoardReceiveAttack,
    enableRandomFleet,
    lockOpponentBoard,
    unlockOpponentBoard,
    initGame,
    startGame,
  };
})();
