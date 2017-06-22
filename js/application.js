import welcomeContainer from './containers/welcome.js';
import resultsContainer from './containers/results.js';
import guessArtistContainer from './containers/guess-artist.js';
import guessGenreContainer from './containers/guess-genre.js';
import getInitialState from './model/get-initial-state.js';
import createVictoryMessage from './model/create-victory-message.js';
import fetchPreviousScores from './fetch-previous-scores.js';
import defeat from './model/defeat.js';
import calcGreatness from './calc-greatness.js';
import greetings from './model/greetings.js';

export default class Application {

  static renderViewMatchedToRoute() {
    switch (location.hash) {
      case ``:
        this.openWelcomeScreen(greetings);
        break;
      case `#game`:
        const initialState = getInitialState();
        if (initialState.question.type === `artist`) {
          this.openGuessArtistScreen(initialState);
        } else {
          this.openGuessGenreScreen(initialState);
        }
        break;
      case `#results`:
        this.openResultsScreen(defeat);
        break;
      default:
        try {
          const playerScore = JSON.parse(location.hash.split(`=`)[1]);
          const previousScores = fetchPreviousScores();
          const victoryMessage = createVictoryMessage(playerScore, calcGreatness(playerScore, previousScores));
          this.openResultsScreen(victoryMessage);
        } catch (error) {
          location.hash = ``;
        }
        break;
    }
  }

  static init() {
    this.renderViewMatchedToRoute();

    window.addEventListener(`hashchange`, () => {
      this.renderViewMatchedToRoute();
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
