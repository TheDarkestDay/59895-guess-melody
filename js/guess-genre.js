import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import renderScreen from './render-screen.js';
import resultScreen from './result.js';
import victory from './model/victory.js';
import defeat from './model/defeat.js';

const sectionClass = `main main--level main--level-genre`;
const guessGenreMarkup = `
  <h2 class="title">Выберите инди-рок треки</h2>
  <form class="genre">
    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-1">
      <label class="genre-answer-check" for="a-1"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-2">
      <label class="genre-answer-check" for="a-2"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-3">
      <label class="genre-answer-check" for="a-3"></label>
    </div>

    <div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="answer-1" id="a-4">
      <label class="genre-answer-check" for="a-4"></label>
    </div>

    <button class="genre-answer-send" type="submit">Ответить</button>
  </form>`;
const guessGenreScreen = buildDOMFromTemplate(guessGenreMarkup, sectionClass);
const answers = [...guessGenreScreen.querySelectorAll(`input[type="checkbox"]`)];
const sendBtn = guessGenreScreen.querySelector(`.genre-answer-send`);

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

sendBtn.addEventListener(`click`, () => {
  const randomNumber = Math.round(Math.random());
  if (randomNumber === 1) {
    renderScreen(resultScreen(victory));
  } else {
    renderScreen(resultScreen(defeat));
  }
});

export default guessGenreScreen;
