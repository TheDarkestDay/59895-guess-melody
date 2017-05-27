import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import guessArtistScreen from './guess-artist.js';
import renderScreen from './render-screen.js';

const sectionClass = `main main--welcome`;
const welcomeMarkup = `
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать
    максимальное количество правильных ответов.<br>
    Удачи!
  </p>`;
const welcomeScreen = buildDOMFromTemplate(welcomeMarkup, sectionClass);
const playBtn = welcomeScreen.querySelector(`.main-play`);

playBtn.addEventListener(`click`, () => {
  renderScreen(guessArtistScreen);
});

export default welcomeScreen;
