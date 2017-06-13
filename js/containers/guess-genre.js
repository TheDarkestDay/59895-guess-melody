import GuessGenreView from '../views/guess-genre-view.js';
import renderScreen from '../render-screen.js';
import resultsContainer from './results.js';
import victory from '../model/victory.js';
import defeat from '../model/defeat.js';

export default (data) => {
  const view = new GuessGenreView(`main main--level main--level-genre`, data);

  view.handleAnswerSubmit = () => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      renderScreen(resultsContainer(victory));
    } else {
      renderScreen(resultsContainer(defeat));
    }
  };

  return view;
};
