import GuessGenreView from '../views/guess-genre-view.js';
import GamePresenter from '../game-presenter.js';

export default (currentState) => {
  const view = new GuessGenreView(`main main--level main--level-genre`, currentState);
  const presenter = new GamePresenter(currentState, view);

  view.handleAnswerSubmit = (answers) => {
    presenter.handleAnswerSubmit(answers);
  };
};
