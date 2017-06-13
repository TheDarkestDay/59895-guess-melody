import ResultsView from '../views/results-view.js';
import renderScreen from '../render-screen.js';
import welcomeContainer from './welcome.js';
import greetings from '../model/greetings.js';

export default (data) => {
  const view = new ResultsView(`main main--result`, data);

  view.handleClick = () => {
    renderScreen(welcomeContainer(greetings));
  };

  return view;
};
