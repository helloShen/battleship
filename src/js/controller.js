// import Ship from './models/ship';
// import Board from './models/board';
// import Player from './models/player';
import Game from './models/game';
import View from './view';

export default (() => {

  function drawBoard() {
    Game.init();
    const playerIds = Game.players().reduce((arr, player) => {
      arr.push(player.id());
      return arr;
    }, []);
    View.drawBoard(Game.DEFAULT_BOARD_SIZE, playerIds);
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
