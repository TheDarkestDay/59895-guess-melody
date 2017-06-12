import GuessArtistView from '../views/guess-artist-view.js';
import renderScreen from '../render-screen.js';
import genreQuestions from '../model/genre-questions.js';
import guessGenreContainer from './guess-genre.js';

export default (data) => {
  const view = new GuessArtistView(`main main--level main--level-artist`, data);

  view.handleClick = () => {
    renderScreen(guessGenreContainer(genreQuestions));
  };

  return view;
};
