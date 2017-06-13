import AbstractView from './abstract-view.js';

export default class GuessGenreView extends AbstractView {

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
    const {answers, targetGenre} = this.props;
    return `
      <h2 class="title">Выберите ${targetGenre} треки</h2>
      <form class="genre">
        ${answers.map(this.generateAnswerMarkup).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    `;
  }

  bind() {
    const answers = [...this._element.querySelectorAll(`input[type="checkbox"]`)];
    const sendBtn = this._element.querySelector(`.genre-answer-send`);
    sendBtn.disabled = true;

    sendBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.handleAnswerSubmit();
    });

    answers.forEach((elem) => elem.addEventListener(`change`, () => {
      if (answers.some((checkbox) => checkbox.checked)) {
        sendBtn.disabled = false;
      } else {
        sendBtn.disabled = true;
      }
    }));
  }
}
