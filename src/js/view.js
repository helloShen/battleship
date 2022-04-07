// import Player from "./models/player";

export default (() => {
  const ELEMENTS = {
    root: document.querySelector(':root'),
    players: [
      document.querySelector('.player[data-id="0"]'),
      document.querySelector('.player[data-id="1"]'),
    ],
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
   * Draw the sea layer of game board.
   * @param {Number} size Board size.
   * @returns Sea layer div element.
   */
  function drawSeaLayer(size) {
    const seaLayer = document.createElement('div');
    seaLayer.classList.add('seaLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const seaGrid = createGrid(row, column);
        if (row === 0) seaGrid.classList.add('upperBorder');
        if (column === 0) seaGrid.classList.add('leftBorder');
        seaLayer.appendChild(seaGrid);
      }
    }
    return seaLayer;
  }

  /**
   * Draw the ship layer of game board.
   * @param {Number} size Board size.
   * @param {String} playerType "ai" or "human".
   * @param {Function} callback Board.canHitShip() function,
   * to check if there's a ship sits on a certain grid.
   * @returns Ship layer div element.
   */
  function drawShipLayer(size, playerType, callback) {
    const shipLayer = document.createElement('div');
    shipLayer.classList.add('shipLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const shipGrid = createGrid(row, column);
        if (row === 0) shipGrid.classList.add('upperBorder');
        if (column === 0) shipGrid.classList.add('leftBorder');
        if (callback(row, column)) shipGrid.classList.add('hasShip');
        shipLayer.appendChild(shipGrid);
      }
    }
    switch (playerType) {
      case 'ai':
        shipLayer.classList.add('hide');
        break;
      case 'human':
        shipLayer.classList.add('show');
        break;
      default:
        break;
    }
    return shipLayer;
  }

  /**
   * Draw board of specific player.
   * @param {Number} size Size of the board.
   * @param {Number} playerId Denote which board to draw.
   * @param {String} playerType "human" or "ai"
   * @param {Function} callback Board.canHitShip() function,
   * to check if there's a ship sits on a certain grid.
   */
  function drawBoard(size, playerId, playerType, callback) {
    const target = ELEMENTS.players[playerId];
    const seaLayer = drawSeaLayer(size);
    const shipLayer = drawShipLayer(size, playerType, callback);
    target.appendChild(seaLayer);
    target.appendChild(shipLayer);
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
        grid.addEventListener('click', () => callback(
          parseInt(grid.dataset.row, 10),
          parseInt(grid.dataset.column, 10),
          parseInt(boardElement.dataset.playerId, 10),
        ));
      });
    });
  }

  // prevent current player's board to be attacked.

  return {
    drawBoard,
    bindReceiveAttack,
  };
})();
