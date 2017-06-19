import renderScreen from './render-screen.js';
import welcomeContainer from './containers/welcome.js';
import resultsContainer from './containers/results.js';
import guessArtistContainer from './containers/guess-artist.js';
import guessGenreContainer from './containers/guess-genre.js';

export default class Application {
  static openWelcomeScreen(props) {
    renderScreen(welcomeContainer(props));
  }

  static openGuessArtistScreen(props) {
    guessArtistContainer(props);
  }

  static openGuessGenreScreen(props) {
    guessGenreContainer(props);
  }

  static openResultsScreen(props) {
    renderScreen(resultsContainer(props));
  }
}
