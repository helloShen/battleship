import Game, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from './models/game';
import View from './view';

export {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
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
   */
  function drawASingleBoard(player) {
    const playerType = (player.isAI()) ? 'ai' : 'human';
    const board = player.board();
    View.drawBoard(
      Game.DEFAULT_BOARD_SIZE,
      player.id(),
      playerType,
      board.canHitShip,
      board.alreadyHit,
      board.alreadyMissed,
    );
  }

  /**
   * Draw board for each player.
   */
  function drawBoards() {
    Game.players().forEach((player) => {
      drawASingleBoard(player);
    });
  }

  /**
   * Gameover logic.
   */
  function gameover(loserId) {
    // eslint-disable-next-line no-alert
    alert(`${loserId} lose!`);
  }

  /**
   * Actual attack logic.
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @param {Function} renderSeaCallback Render the grid color according
   * to the attack result(hit or miss).
   */
  function playerAttack(row, column, opponentId) {
    const board = Game.player(opponentId).board();
    if (board.alreadyBeenAttacked(row, column)) return;
    const result = board.receiveAttack(row, column);
    View.renderSeaAfterAttack(row, column, opponentId, result);
    View.renderSunkShips(opponentId, board.reportSunk());
    if (board.allSunk()) gameover(opponentId);
    Game.nextTurn(playerAttack); // pass itself to the Game module as a callback.
  }

  /**
   * Pass the attack logic to the View module as a callback.
   */
  function enableBoardReceiveAttack() {
    View.bindReceiveAttack(playerAttack);
  }

  function startGame() {
    Game.start();
    Game.nextTurn(playerAttack); // pass itself to the Game module as a callback.
  }

  return {
    initPlayersAndBoards,
    drawASingleBoard,
    drawBoards,
    enableBoardReceiveAttack,
    startGame,
  };
})();
