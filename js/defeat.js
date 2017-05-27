import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import welcomeScreen from './welcome.js';
import renderScreen from './render-screen.js';

const sectionClass = `main main--result`;
const defeatMarkup = `
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы проиграли</h2>
  <div class="main-stat">Ничего, вам повезет в следующий раз</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
const defeatScreen = buildDOMFromTemplate(defeatMarkup, sectionClass);
const replayButton = defeatScreen.querySelector(`.main-replay`);

replayButton.addEventListener(`click`, () => {
  renderScreen(welcomeScreen);
});

export default defeatScreen;
