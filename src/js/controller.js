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
   * Call View module to draw the board for each player.
   */
  function drawBoard() {
    Game.players().forEach((player) => {
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
    });
  }

  /**
   * Actual attack logic.
   * When human player click on the board, View module will call this function.
   * When AI player decide the target position of next attack, it will also
   * callback this function.
   * @param {Number} row Axi Y of target gird.
   * @param {Number} column Axi X of target grid.
   * @param {Number} opponentId Id of opponent player.
   * @param {Function} renderCallback Render the grid color according
   * to the attack result(hit or miss).
   */
  function playerAttack(row, column, opponentId, renderCallback) {
    const board = Game.player(opponentId).board();
    if (board.alreadyBeenAttacked(row, column)) return;
    const result = board.receiveAttack(row, column);
    if (renderCallback) {
      renderCallback(result);
    } else {
      View.renderSeaAfterAttack(row, column, opponentId, result);
    }
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
    drawBoard,
    enableBoardReceiveAttack,
    startGame,
  };
})();
