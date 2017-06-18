import WelcomeView from '../views/welcome-view.js';
import guessArtistContainer from './guess-artist.js';
import artistQuestions from '../model/artist-questions.js';

export default (data) => {
  const view = new WelcomeView(`main main--welcome`, data);

  view.handleClick = () => {
    guessArtistContainer(artistQuestions);
  };

  return view;
};
