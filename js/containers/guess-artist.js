import GuessArtistView from '../views/guess-artist-view.js';
import GamePresenter from '../game-presenter.js';
import initialState from '../model/initial-state.js';

export default (data) => {
  const view = new GuessArtistView(`main main--level main--level-artist`, data);
  const presenter = new GamePresenter(initialState, view);

  view.handleAnswerSubmit = (evt) => {
    const answerIdx = evt.target.value.split(`-`)[1] - 1;
    presenter.handleAnswerSubmit(answerIdx);
  };
};
