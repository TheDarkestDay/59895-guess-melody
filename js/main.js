import welcomeContainer from './containers/welcome.js';
import renderScreen from './render-screen.js';
import greetings from './model/greetings.js';

renderScreen(welcomeContainer(greetings));
