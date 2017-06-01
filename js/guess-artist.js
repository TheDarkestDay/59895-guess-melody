import buildDOMFromTemplate from './buildDOMFromTemplate.js';
import renderScreen from './render-screen.js';
import guessGenreScreen from './guess-genre.js';
import genreQuestions from './model/genre-questions.js';

export default (data) => {

  function generateAnswerChoiceMarkup(answer, idx) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${idx + 1}" name="answer" value="val-${idx + 1}" />
        <label class="main-answer" for="answer-${idx + 1}">
          <img class="main-answer-preview" src="${answer.pictureUrl}">
          ${answer.artist}
        </label>
      </div>
    `;
  }

  const sectionClass = `main main--level main--level-artist`;
  const guessArtistMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${ data.answers.map(generateAnswerChoiceMarkup).join(``) }
      </form>
    </div>`;
  const guessArtistScreen = buildDOMFromTemplate(guessArtistMarkup, sectionClass);
  const answers = [...guessArtistScreen.querySelectorAll(`.main-answer`)];
  const playerWrapper = guessArtistScreen.querySelector(`.player-wrapper`);

  function openNextScreen() {
    renderScreen(guessGenreScreen(genreQuestions));
  }

  answers.forEach((answer) => answer.addEventListener(`click`, openNextScreen));
  window.initializePlayer(playerWrapper, data.audioUrl);

  return guessArtistScreen;
};
