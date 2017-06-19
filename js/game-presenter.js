import renderScreen from './render-screen.js';
import submitAnswer from './submit-answer.js';
import calcGreatness from './calc-greatness.js';
import fetchPreviousScores from './fetch-previous-scores.js';
import Application from './application.js';
import genreQuestion from './model/genre-question.js';
import artistQuestion from './model/artist-question.js';
import createVictoryMessage from './model/victory.js';
import defeat from './model/defeat.js';

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

    if (this.state.timeLeft === 0) {
      Application.openResultsScreen(defeat);
    }
  }

  handleAnswerSubmit(answer) {
    this.state = submitAnswer(this.state, answer);

    switch (this.state.screen) {
      case `artist`:
        this.state.question = Object.assign(artistQuestion);
        Application.openGuessArtistScreen(this.state);
        break;
      case `genre`:
        this.state.question = Object.assign(genreQuestion);
        Application.openGuessGenreScreen(this.state);
        break;
      case `results`:
        if (this.state.questionsLeft === 0) {
          const playerScore = {
            time: this.state.duration - this.state.timeLeft,
            answers: 10 - this.state.questionsLeft - 3 + this.state.lives
          };
          const previousScores = fetchPreviousScores();
          const victoryMessage = createVictoryMessage(this.state, calcGreatness(playerScore, previousScores));
          Application.openResultsScreen(victoryMessage);
        } else {
          Application.openResultsScreen(defeat);
        }
        break;
    }
  }
}
