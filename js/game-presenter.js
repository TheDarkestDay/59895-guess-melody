import renderScreen from './render-screen.js';
import submitAnswer from './submit-answer.js';

export default class GamePresenter {
  constructor(state, view) {
    this.state = state;
    this.view = view;
    renderScreen(this.view);

    this.updateTimer();
    this.interval = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    this.state = Object.assign(this.state, {
      timeLeft: this.state.timeLeft - 1
    });
    this.view.renderTime(this.state.timeLeft);
  }

  handleAnswerSubmit(answer) {
    this.state = submitAnswer(this.state, answer);
  }
}
