import buildDOMFromTemplate from './buildDOMFromTemplate.js';

const sectionClass = `main main--result`;
const defeatMarkup = `
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы проиграли</h2>
  <div class="main-stat">Ничего, вам повезет в следующий раз</div>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;
const defeatScreen = buildDOMFromTemplate(defeatMarkup, sectionClass);
export default defeatScreen;
