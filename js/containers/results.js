import ResultsView from '../views/results-view.js';
import Application from '../application.js';
import greetings from '../model/greetings.js';

export default (data) => {
  const view = new ResultsView(`main main--result`, data);

  view.handleClick = () => {
    Application.openWelcomeScreen(greetings);
  };

  return view;
};
