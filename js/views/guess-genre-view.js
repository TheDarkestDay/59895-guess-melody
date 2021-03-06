import GameView from './game-view.js';
import {getAnswerIdx, isChecked} from '../utils.js';

export default class GuessGenreView extends GameView {

  generateAnswerMarkup(answer, idx) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-${idx + 1}" id="a-${idx + 1}">
        <label class="genre-answer-check" for="a-${idx + 1}"></label>
      </div>
    `;
  }

  get template() {
    const {answers, question} = this.props.question;
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      </div>
      <div class="main-wrap">
        <h2 class="title">${question}</h2>
        <form class="genre">
          ${answers.map(this.generateAnswerMarkup).join(``)}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>
    `;
  }

  bind() {
    const answers = [...this._element.querySelectorAll(`input[type="checkbox"]`)];
    const sendBtn = this._element.querySelector(`.genre-answer-send`);
    const tracks = [...this._element.querySelectorAll(`.player-wrapper`)];
    sendBtn.disabled = true;

    sendBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      const answersIdx = answers
                          .filter(isChecked)
                          .map(getAnswerIdx);

      this.handleAnswerSubmit(answersIdx);
    });

    tracks.forEach((track, idx) => {
      window.initializePlayer(track, this.props.question.answers[idx].src);
    });

    answers.forEach((elem) => {
      elem.addEventListener(`change`, () => {
        if (answers.some(isChecked)) {
          sendBtn.disabled = false;
        } else {
          sendBtn.disabled = true;
        }
      });
    });
  }
}
