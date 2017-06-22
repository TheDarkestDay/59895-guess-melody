import renderScreen from '../render-screen.js';
import ResultsView from '../views/results-view.js';

export default (data) => {
  const view = new ResultsView(`main main--result`, data);

  view.handleClick = () => {
    location.hash = ``;
  };

  renderScreen(view);
};
