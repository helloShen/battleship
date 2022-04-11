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

Controller.newGame();
Controller.enableRandomFleet();
Controller.enableStartGame();
Controller.enableRestartGame();
Controller.showFooter();
