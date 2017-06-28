import submitAnswer from './submit-answer.js';
import Application from './application.js';
import defeat from './model/defeat.js';
import {calcRightAnswers} from './utils.js';

export default class GamePresenter {
  constructor(state, view) {
    this.state = state;
    this.view = view;
    if (this.state.question.type === `artist`) {
      console.log(this.state.question.answers.findIndex((elem) => elem.isCorrect));
    } else {
      console.log(this.state.question.answers.map((elem) => elem.genre === this.state.question.genre));
    }
  }

  startTimer() {
    this.updateTimer();
    this.interval = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    this.state = Object.assign(this.state, {
      timeLeft: this.state.timeLeft - 1
    });
    this.view.renderTime(this.state.timeLeft);

    if (this.state.timeLeft === 0) {
      Application.openResultsScreen(defeat);
    }
  }

  handleAnswerSubmit(answer) {
    this.state = submitAnswer(this.state, answer);

    switch (this.state.screen) {
      case `game`:
        Application.openNextQuestionScreen(this.state);
        break;
      case `results`:
        if (this.state.questionsLeft === 0) {
          const playerScore = {
            time: this.state.duration - this.state.timeLeft,
            answers: calcRightAnswers(this.state)
          };
          location.hash = `results=${JSON.stringify(playerScore)}`;
        } else {
          location.hash = `results`;
        }
        break;
    }
  }
}
