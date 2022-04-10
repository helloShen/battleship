export const MAIN = Symbol('main');
export const OPPONENT = Symbol('opponent');

export default (() => {
  const ELEMENTS = {
    root: document.querySelector(':root'),
    mainPlayer: document.querySelector('.player.main'),
    opponentPlayer: document.querySelector('.player.opponent'),
    random: document.querySelector('.random'),
    start: document.querySelector('.start'),
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
   * Each grid is annotated with the player's id to whom
   * this board belongs.
   * @param {Number} size Board size.
   * @param {Number} playerId Id of owner of that board.
   * @returns Sea layer div element.
   */
  function drawSeaLayer(size, playerId) {
    const seaLayer = document.createElement('div');
    seaLayer.classList.add('seaLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const grid = createGrid(row, column);
        grid.dataset.playerId = playerId;
        grid.classList.add('material-icons');
        if (row === 0) grid.classList.add('upperBorder');
        if (column === 0) grid.classList.add('leftBorder');
        seaLayer.appendChild(grid);
      }
    }
    return seaLayer;
  }

  /**
   * Draw the ship layer of game board.
   * Ship position should be highlighted.
   * @param {Number} size Board size.
   * @param {Function} checkShipCallback Board.canHitShip() function.
   * @returns Ship layer div element.
   */
  function drawShipLayer(size, checkShipCallback) {
    const shipLayer = document.createElement('div');
    shipLayer.classList.add('shipLayer');
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        const grid = createGrid(row, column);
        if (row === 0) grid.classList.add('upperBorder');
        if (column === 0) grid.classList.add('leftBorder');
        if (checkShipCallback(row, column)) grid.classList.add('hasShip');
        shipLayer.appendChild(grid);
      }
    }
    return shipLayer;
  }

  /**
   * Get the MAIN or OPPONENT board element.
   * @param {Symbol} mainOrOpponent MAIN or OPPONENT
   * @return {Element} The DOM element represent the desired board.
   */
  function getMainOrOpponentBoard(mainOrOpponent) {
    return (mainOrOpponent === MAIN)
      ? ELEMENTS.mainPlayer.querySelector('.board')
      : ELEMENTS.opponentPlayer.querySelector('.board');
  }

  /**
   * Search the board element by player id.
   * @param {Number} playerId Id of desired player.
   * @return {Element} DOM element representing the desired board.
   */
  function getPlayerElementById(playerId) {
    if (parseInt(ELEMENTS.mainPlayer.dataset.playerId, 10)
      === playerId) return ELEMENTS.mainPlayer;
    return ELEMENTS.opponentPlayer;
  }

  /**
   * Draw a player's board in MAIN board section or OPPONENT board section.
   * Ex: In player 1's page,
   *  => his own board is shown in MAIN section.
   *  => player 2's board is shown in OPPONENT section.
   * @param {Number} size Size of the board.
   * @param {Number} playerId Denote which board to draw.
   * @param {Symbol} mainOrOpponent MAIN or OPPONENT
   * @param {Function} checkShipCallback Board.canHitShip() function.
   */
  function drawBoard(
    size,
    playerId,
    mainOrOpponent,
    checkShipCallback,
  ) {
    const target = getMainOrOpponentBoard(mainOrOpponent);
    target.parentElement.dataset.playerId = playerId;
    const seaLayer = drawSeaLayer(size, playerId);
    const shipLayer = drawShipLayer(size, checkShipCallback);
    target.appendChild(seaLayer);
    target.appendChild(shipLayer);
  }

  /**
   * Clear the main board or the opponent's board.
   */
  function clearBoard(mainOrOpponent) {
    const target = getMainOrOpponentBoard(mainOrOpponent);
    target.innerHTML = '';
  }

  function clearAllBoards() {
    clearBoard(MAIN);
    clearBoard(OPPONENT);
  }

  /**
   * Render a specific grid color according to the attack result.
   * @param {Number} row Target grid Axi Y.
   * @param {Number} column Target grid Axi X.
   * @param {Number} playerId Player id.
   * @param {Number} attackResult
   *  1. if attack hit a ship, it's the ship's id.
   *  2. if attack missed, it's -1.
   *  3. if the target spot alreay been attacked before, it's undefined.
   */
  function renderSeaAfterAttack(row, column, playerId, attackResult) {
    const playerElement = getPlayerElementById(playerId);
    const seaLayer = playerElement.querySelector('.board > .seaLayer');
    const grid = seaLayer.querySelector(`.grid[data-row="${row}"][data-column="${column}"]`);
    if (attackResult === undefined) return; // no more grid to attack
    if (attackResult === -1) { // missed
      grid.classList.add('alreadyMissed');
    } else { // it's a hit
      grid.classList.add('alreadyHit');
    }
  }

  /**
   * Given an array of coordinates of the ship body, mark that ship on the Sea Layer.
   * @param {Number} playerId Player id.
   * @param {Array} sunkCoordinates Coordinates of the sunk ship (sunk by this attack).
   */
  function renderSunkShips(playerId, sunkCoordinates) {
    const playerElement = getPlayerElementById(playerId);
    const seaLayer = playerElement.querySelector('.board > .seaLayer');
    sunkCoordinates.forEach((coordinate) => {
      const grid = seaLayer.querySelector(`.grid[data-row="${coordinate[0]}"][data-column="${coordinate[1]}"]`);
      grid.classList.add('sunk');
    });
  }

  /**
   * Bind event listener to a player's board, so that
   * when opponent click on board will callback controller's playerAttack() function.
   * @param {Element} playerElement mainPlayer or opponentPlayer
   * @param {Function} callback Controller.playerAttack() function,
   * The actual attack logic resides in controller.
   */
  function bindReceiveAttackToPlayersBoard(playerElement, callback) {
    const seaLayer = playerElement.querySelector('.board > .seaLayer');
    const grids = seaLayer.querySelectorAll('.grid');
    grids.forEach((grid) => {
      grid.addEventListener('click', () => callback(
        parseInt(grid.dataset.row, 10),
        parseInt(grid.dataset.column, 10),
        parseInt(playerElement.dataset.playerId, 10),
      ));
    });
  }

  /**
   * Bind receive attack feature to both MAIN and OPPONENT board on the page.
   * @param {Function} callback Controller.playerAttack() function,
   * The actual attack logic resides in controller.
   */
  function bindReceiveAttack(callback) {
    bindReceiveAttackToPlayersBoard(ELEMENTS.mainPlayer, callback);
    bindReceiveAttackToPlayersBoard(ELEMENTS.opponentPlayer, callback);
  }

  /**
   * Bind random fleet feature.
   * @param {Function} callback Controller will provide the logic of
   * actually generating a new fleet and re-draw the board.
   */
  function bindRandomFleet(callback) {
    const playerId = parseInt(ELEMENTS.mainPlayer.dataset.playerId, 10);
    ELEMENTS.random.addEventListener('click', () => callback(MAIN, playerId)); // main player random his fleet.
  }

  /**
    * Lock opponent's board, prevent player from interact with the board
    * before starting the game.
    */
  function lockOpponentBoard() {
    ELEMENTS.opponentPlayer.querySelector('.board').classList.add('lock');
  }

  /**
    * Once the game is prepared, unlock opponent's boards, so that player gain
    * the access to the board.
    */
  function unlockOpponentBoard() {
    ELEMENTS.opponentPlayer.querySelector('.board').classList.remove('lock');
  }

  // prevent current player's board to be attacked.

  return {
    drawBoard,
    clearBoard,
    clearAllBoards,
    renderSeaAfterAttack,
    renderSunkShips,
    bindReceiveAttack,
    bindRandomFleet,
    lockOpponentBoard,
    unlockOpponentBoard,
  };
})();
