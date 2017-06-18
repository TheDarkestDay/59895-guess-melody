import AbstractView from './abstract-view.js';

export default class GameView extends AbstractView {
  renderTime(timeLeft) {
    const timer = this._element.querySelector(`.timer-value`);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.textContent = `${minutes}:${seconds < 10 ? `0` : ``}${seconds}`;
  }
}
