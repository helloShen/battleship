/* eslint-disable no-unused-vars */
import Controller, {
  AI,
  HUMAN,
  EASY,
  NORMAL,
  HARD,
} from './controller';
// eslint-disable-next-line no-unused-vars
import css from '../css/index.css';

Controller.initPlayersAndBoards(HUMAN, AI);
Controller.drawBoards();
Controller.enableBoardReceiveAttack();
Controller.startGame();
