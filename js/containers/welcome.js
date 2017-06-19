import WelcomeView from '../views/welcome-view.js';
import guessArtistContainer from './guess-artist.js';
import getInitialState from '../model/get-initial-state.js';

export default (data) => {
  const view = new WelcomeView(`main main--welcome`, data);

  view.handleClick = () => {
    guessArtistContainer(getInitialState());
  };

  return view;
};
