import welcomeContainer from './containers/welcome.js';
import resultsContainer from './containers/results.js';
import guessArtistContainer from './containers/guess-artist.js';
import guessGenreContainer from './containers/guess-genre.js';
import getInitialState from './model/get-initial-state.js';
import createVictoryMessage from './model/create-victory-message.js';
import fetchPreviousScores from './fetch-previous-scores.js';
import defeat from './model/defeat.js';
import calcGreatness from './calc-greatness.js';

export default class Application {

  static init() {
    window.addEventListener(`hashchange`, () => {
      switch (location.hash) {
        case `#game`:
          const initialState = getInitialState();
          this.openGuessArtistScreen(initialState);
          break;
        case `#results`:
          this.openResultsScreen(defeat);
          break;
        default:
          const playerScore = JSON.parse(location.hash.split(`=`)[1]);
          const previousScores = fetchPreviousScores();
          const victoryMessage = createVictoryMessage(playerScore, calcGreatness(playerScore, previousScores));
          this.openResultsScreen(victoryMessage);
          break;
      }
    });
  }

  static openWelcomeScreen(props) {
    welcomeContainer(props);
  }

  static openGuessArtistScreen(props) {
    guessArtistContainer(props);
  }

  static openGuessGenreScreen(props) {
    guessGenreContainer(props);
  }

  static openResultsScreen(props) {
    resultsContainer(props);
  }
}
