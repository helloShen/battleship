// import Player from "./models/player";

export default (() => {
  const ELEMENTS = {
    root: document.querySelector(':root'),
    boards: Array.from(document.querySelectorAll('.board')),
  };

  /**
   * Create a single grid in board according to it's coordinate.
   * @param {Number} row Grid axi Y.
   * @param {Number} column Grid axi X.
   * @returns Grid element.
   */
  function createGrid(row, column) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.dataset.row = row;
    grid.dataset.column = column;
    return grid;
  }

  /**
   * Draw two board for each player:
   *  1. his own board.
   *  2。his opponent's board.
   *
   * @param {Number} size Size of the board.
   * @param {Array} Array of player id.
   */
  function drawBoard(size, playerIds) {
    ELEMENTS.root.style.setProperty('--board-size', `${size}`);
    let index = 0;
    ELEMENTS.boards.forEach((boardElement) => {
      // eslint-disable-next-line no-param-reassign
      boardElement.dataset.playerId = playerIds[index];
      index += 1;
    });
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        ELEMENTS.boards.forEach((boardElement) => {
          boardElement.appendChild(createGrid(row, column));
        });
      }
    }
  }

  /**
   * Click on board will callback controller's userAttack() function.
   * @param {Element} boardElement Target board container element in DOM.
   * @param {Function} callback Actual attack logic resides in controller.
   */
  function bindReceiveAttack(callback) {
    ELEMENTS.boards.forEach((boardElement) => {
      const grids = boardElement.querySelectorAll('.grid');
      grids.forEach((grid) => {
        grid.addEventListener('click', () => callback(grid.dataset.row, grid.dataset.column, boardElement.dataset.playerId));
      });
    });
  }

  // prevent current player's board to be attacked.

  return {
    drawBoard,
    bindReceiveAttack,
  };
})();
