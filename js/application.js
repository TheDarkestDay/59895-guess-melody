import welcomeContainer from './containers/welcome.js';
import resultsContainer from './containers/results.js';
import guessArtistContainer from './containers/guess-artist.js';
import guessGenreContainer from './containers/guess-genre.js';
import getInitialState from './model/get-initial-state.js';
import createVictoryMessage from './model/create-victory-message.js';
import defeat from './model/defeat.js';
import calcGreatness from './calc-greatness.js';
import greetings from './model/greetings.js';
import QuestionGateaway from './model/question-gateaway.js';
import StatsGateaway from './model/stats-gateaway.js';
import QuestionTypes from './model/question-types.js';

export default class Application {

  static async renderViewMatchedToRoute() {
    switch (location.hash) {
      case ``:
        this.openWelcomeScreen(greetings);
        break;
      case `#game`:
        this.openNextQuestionScreen(getInitialState());
        break;
      case `#results`:
        this.openResultsScreen(defeat);
        break;
      default:
        try {
          const playerScore = JSON.parse(location.hash.split(`=`)[1]);
          StatsGateaway.publish(playerScore);
          const previousScores = await StatsGateaway.getPreviousData();
          const victoryMessage = createVictoryMessage(playerScore, calcGreatness(playerScore, previousScores));
          this.openResultsScreen(victoryMessage);
        } catch (error) {
          console.log(error);
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

  static async openNextQuestionScreen(currentState) {
    const nextQuestion = await QuestionGateaway.getNext();
    currentState.question = nextQuestion;
    if (nextQuestion.type === QuestionTypes.ARTIST) {
      this.openGuessArtistScreen(currentState);
    } else {
      this.openGuessGenreScreen(currentState);
    }
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
