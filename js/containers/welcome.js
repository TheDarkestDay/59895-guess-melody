import renderScreen from '../render-screen.js';
import WelcomeView from '../views/welcome-view.js';

export default (data) => {
  const view = new WelcomeView(`main main--welcome`, data);

  view.handleClick = () => {
    location.hash = `game`;
  };

  renderScreen(view);
};
