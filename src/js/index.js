/* eslint-disable no-unused-vars */
import Controller, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
  MAIN,
  OPPONENT,
} from './controller';
import css from '../css/index.css';

Controller.clearAllBoards();
Controller.initPlayersAndBoards(HUMAN, AI);
Controller.drawBoardsForPlayer(0); // in human player's perspective
Controller.lockOpponentBoard();
Controller.enableBoardReceiveAttack();
Controller.enableRandomFleet();
// Controller.startGame();
