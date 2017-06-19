import GuessArtistView from '../views/guess-artist-view.js';
import GamePresenter from '../game-presenter.js';

export default (currentState) => {
  const view = new GuessArtistView(`main main--level main--level-artist`, currentState);
  const presenter = new GamePresenter(currentState, view);

  view.handleAnswerSubmit = (evt) => {
    const answerIdx = evt.target.value.split(`-`)[1] - 1;
    presenter.handleAnswerSubmit(answerIdx);
  };
};
