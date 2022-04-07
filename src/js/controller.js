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
  function drawBoard(player1Type, player2Type) {
    Game.initPlayers(player1Type, player2Type);
    Game.players().forEach((player) => {
      const playerType = (player.isAI()) ? 'ai' : 'human';
      View.drawBoard(Game.DEFAULT_BOARD_SIZE, player.id(), playerType, player.board().canHitShip);
    });
  }

  /**
   * Actual attack logic.
   * @param {*} row Axi Y of target gird.
   * @param {*} column Axi X of target grid.
   * @param {*} opponentId Id of opponent player.
   */
  function userAttack(row, column, opponentId) {
    Game.player(opponentId).board().receiveAttack(row, column);
    Game.nextTurn();
  }

  function enableBoardReceiveAttack() {
    View.bindReceiveAttack(userAttack);
  }

  return {
    drawBoard,
    enableBoardReceiveAttack,
  };
})();
