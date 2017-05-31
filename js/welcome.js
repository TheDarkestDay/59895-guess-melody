import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import guessArtistScreen from './guess-artist.js';
import renderScreen from './render-screen.js';

export default (data) => {
  const sectionClass = `main main--welcome`;
  const welcomeMarkup = `
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">${data.title}</h2>
    <p class="text main-text">
      ${data.rules}
    </p>`;
  const welcomeScreen = buildDOMFromTemplate(welcomeMarkup, sectionClass);
  const playBtn = welcomeScreen.querySelector(`.main-play`);

  playBtn.addEventListener(`click`, () => {
    renderScreen(guessArtistScreen);
  });

  return welcomeScreen;
};
