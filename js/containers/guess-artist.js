import renderScreen from '../render-screen.js';
import GuessArtistView from '../views/guess-artist-view.js';
import GamePresenter from '../game-presenter.js';
import {getAnswerIdx} from '../utils.js';

export default (currentState) => {
  const view = new GuessArtistView(`main main--level main--level-artist`, currentState);
  const presenter = new GamePresenter(currentState, view);

  view.handleAnswerSubmit = (evt) => {
    const answerIdx = getAnswerIdx(evt.target);
    presenter.handleAnswerSubmit(answerIdx);
  };

  view.onComponentRendered = () => {
    presenter.startTimer();
  };

  renderScreen(view);
};
