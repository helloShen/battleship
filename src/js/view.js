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
   * Hit area and missed area should be marked.
   * @param {Number} size Board size.
   * @param {Function} checkHitHistoryCallback Board.alreadyHit() function.
   * @param {Function} checkMissHistoryCallback Board.alreadyMissed() function.
   * @returns Sea layer div element.
   */
  function drawSeaLayer(size, checkHitHistoryCallback, checkMissHistoryCallback) {
    const seaLayer = document.createElement('div');
    seaLayer.classList.add('seaLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const seaGrid = createGrid(row, column);
        if (row === 0) seaGrid.classList.add('upperBorder');
        if (column === 0) seaGrid.classList.add('leftBorder');
        if (checkHitHistoryCallback(row, column)) {
          seaGrid.classList.add('alreadyHit');
        } else if (checkMissHistoryCallback(row, column)) {
          seaGrid.classList.add('alreadyMissed');
        }
        seaLayer.appendChild(seaGrid);
      }
    }
    return seaLayer;
  }

  /**
   * Draw the ship layer of game board.
   * Ship position should be highlighted.
   * @param {Number} size Board size.
   * @param {String} playerType "ai" or "human".
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @returns Ship layer div element.
   */
  function drawShipLayer(size, playerType, checkShipCallback) {
    const shipLayer = document.createElement('div');
    shipLayer.classList.add('shipLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const shipGrid = createGrid(row, column);
        if (row === 0) shipGrid.classList.add('upperBorder');
        if (column === 0) shipGrid.classList.add('leftBorder');
        if (checkShipCallback(row, column)) shipGrid.classList.add('hasShip');
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
   * @param {String} playerType "human" or "ai".
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @param {Function} checkHitHistoryCallback Board.alreadyHit() function.
   * @param {Function} checkMissHistoryCallback Board.alreadyMissed() function.
   */
  function drawBoard(
    size,
    playerId,
    playerType,
    checkShipCallback,
    checkHitHistoryCallback,
    checkMissHistoryCallback,
  ) {
    const target = ELEMENTS.players[playerId].querySelector('.board');
    const seaLayer = drawSeaLayer(size, checkHitHistoryCallback, checkMissHistoryCallback);
    const shipLayer = drawShipLayer(size, playerType, checkShipCallback);
    target.appendChild(seaLayer);
    target.appendChild(shipLayer);
  }

  /**
   * Render a specific grid color according to the attack result.
   * @param {Number} row Target grid Axi Y.
   * @param {Number} column Target grid Axi X.
   * @param {Number} playerId Player id.
   * @param {Boolean} attackResult true if hit, false if missed.
   */
  function renderSeaAfterAttack(row, column, playerId, attackResult) {
    const playerElement = ELEMENTS.players[playerId];
    const boardElement = playerElement.querySelector('.board > .seaLayer');
    const grid = boardElement.querySelector(`.grid[data-row="${row}"][data-column="${column}"]`);
    if (attackResult === undefined) return; // no more grid to attack.
    if (attackResult) { // hit
      grid.classList.add('alreadyHit');
    } else { // miss
      grid.classList.add('alreadyMissed');
    }
  }

  /**
   * Mark all sunk ships of that player on Sea Layer.
   * @param {Number} playerId Player id.
   * @param {Array} sunkCoordinates coordinates of all sunk ships.
   */
  function renderSunkShips(playerId, sunkCoordinates) {
    const playerElement = ELEMENTS.players[playerId];
    const boardElement = playerElement.querySelector('.board > .seaLayer');
    sunkCoordinates.forEach((coordinates) => {
      coordinates.forEach((coordinate) => {
        const grid = boardElement.querySelector(`.grid[data-row="${coordinate[0]}"][data-column="${coordinate[1]}"]`);
        grid.classList.add('sunk');
      });
    });
  }

  /**
   * Click on board will callback controller's playerAttack() function.
   * @param {Element} boardElement Target board container element in DOM.
   * @param {Function} callback Actual attack logic resides in controller.
   */
  function bindReceiveAttack(callback) {
    ELEMENTS.players.forEach((playerElement) => {
      const boardElement = playerElement.querySelector('.board > .seaLayer');
      const grids = boardElement.querySelectorAll('.grid');
      grids.forEach((grid) => {
        grid.addEventListener('click', () => callback(
          parseInt(grid.dataset.row, 10),
          parseInt(grid.dataset.column, 10),
          parseInt(playerElement.dataset.id, 10),
        ));
      });
    });
  }

  // prevent current player's board to be attacked.

  return {
    drawBoard,
    renderSeaAfterAttack,
    renderSunkShips,
    bindReceiveAttack,
  };
})();
