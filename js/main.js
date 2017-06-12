import WelcomeView from './views/welcome-view.js';
import guessArtistScreen from './guess-artist.js';
import artistQuestions from './model/artist-questions.js';
import greetings from './model/greetings.js';
import renderScreen from './render-screen.js';

const welcomeScreen = new WelcomeView(`main main--welcome`, greetings);

welcomeScreen.handleClick = () => {
  renderScreen(guessArtistScreen(artistQuestions));
};

renderScreen(welcomeScreen.element);
