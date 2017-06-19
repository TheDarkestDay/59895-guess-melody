import renderScreen from './render-screen.js';
import submitAnswer from './submit-answer.js';
import guessGenreScreen from './containers/guess-genre.js';
import guessArtistScreen from './containers/guess-artist.js';
import genreQuestion from './model/genre-question.js';
import artistQuestion from './model/artist-question.js';

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

    const randomNum = Math.random();
    if (randomNum > 0.5) {
      this.state.question = Object.assign(genreQuestion);
      guessGenreScreen(this.state);
    } else {
      this.state.question = Object.assign(artistQuestion);
      guessArtistScreen(this.state);
    }
  }
}
