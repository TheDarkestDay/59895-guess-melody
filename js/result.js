import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import renderScreen from './render-screen.js';
import greetings from './model/greetings.js';

export default (data) => {
  const sectionClass = `main main--result`;
  const victoryMarkup = `
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">${data.title}</h2>
    <div class="main-stat">${data.score}</div>
    ${ data.isVictory ? `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.greatnessPercentage}%&nbsp;игроков</span>` : ``}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;

  const resultScreen = buildDOMFromTemplate(victoryMarkup, sectionClass);
  const replayButton = resultScreen.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, () => {
 //   renderScreen(welcomeScreen(greetings));
  });

  return resultScreen;
};
