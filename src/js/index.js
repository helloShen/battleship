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

console.log('Before everything starts.');
Controller.initPlayersAndBoards(HUMAN, AI);
console.log('initPlayersAndBoards() finish!');
Controller.drawBoard();
console.log('drawBoard() finish!');
Controller.enableBoardReceiveAttack();
console.log('enableBoardReceiveAttack() finish!');
Controller.startGame();
console.log('startGame() finish!');
