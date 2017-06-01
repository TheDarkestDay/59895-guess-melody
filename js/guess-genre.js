import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import renderScreen from './render-screen.js';
import resultScreen from './result.js';
import victory from './model/victory.js';
import defeat from './model/defeat.js';

export default (data) => {

  function generateAnswerMarkup(answer, idx) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${idx + 1}" id="a-${idx + 1}">
        <label class="genre-answer-check" for="a-${idx + 1}"></label>
      </div>
    `;
  }

  const sectionClass = `main main--level main--level-genre`;
  const guessGenreMarkup = `
    <h2 class="title">Выберите ${data.targetGenre} треки</h2>
    <form class="genre">
      ${data.answers.map(generateAnswerMarkup).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>`;
  const guessGenreScreen = buildDOMFromTemplate(guessGenreMarkup, sectionClass);
  const answers = [...guessGenreScreen.querySelectorAll(`input[type="checkbox"]`)];
  const sendBtn = guessGenreScreen.querySelector(`.genre-answer-send`);
  const playerWrappers = [...guessGenreScreen.querySelectorAll(`.player-wrapper`)];

  function isChecked(checkbox) {
    return checkbox.checked;
  }

  function changeSubmitBtnState() {
    sendBtn.disabled = true;
    if (answers.some(isChecked)) {
      sendBtn.disabled = false;
    }
  }

  sendBtn.disabled = true;
  answers.forEach((answer) => answer.addEventListener(`change`, changeSubmitBtnState));

  playerWrappers.forEach((wrapper, idx) => window.initializePlayer(wrapper, data.answers[idx].audioUrl));

  sendBtn.addEventListener(`click`, () => {
    const randomNumber = Math.round(Math.random());
    if (randomNumber === 1) {
      renderScreen(resultScreen(victory));
    } else {
      renderScreen(resultScreen(defeat));
    }
  });

  return guessGenreScreen;
};
