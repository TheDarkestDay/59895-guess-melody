import submitAnswer from './submit-answer.js';
import Application from './application.js';

export default class GamePresenter {
  constructor(state, view) {
    this.state = state;
    this.state.lastQuestionStartTime = this.state.timeLeft;
    this.view = view;
  }

  destroy() {
    clearInterval(this.interval);
  }

  startTimer() {
    this.updateTimer();
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    this.state = Object.assign(this.state, {
      timeLeft: this.state.timeLeft - 1
    });
    this.view.renderTime(this.state.timeLeft);

    if (this.state.timeLeft === 0) {
      location.hash = `results`;
    }
  }

  handleAnswerSubmit(answer) {
    this.state = submitAnswer(this.state, answer);
    this.destroy();

    switch (this.state.screen) {
      case `game`:
        Application.openNextQuestionScreen(this.state);
        break;
      case `results`:
        if (this.state.questionsLeft === 0) {
          const playerScore = {
            time: this.state.duration - this.state.timeLeft,
            answers: this.state.score
          };
          location.hash = `results=${JSON.stringify(playerScore)}`;
        } else {
          location.hash = `results`;
        }
        break;
    }
  }
}
