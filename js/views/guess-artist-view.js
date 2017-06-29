import GameView from './game-view.js';

export default class GuessArtistView extends GameView {

  generateAnswerChoiceMarkup(answer, idx) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${idx + 1}" name="answer" value="val-${idx + 1}" />
        <label class="main-answer" for="answer-${idx + 1}">
          <img class="main-answer-preview" src="${answer.image.url}" width="${answer.image.width}" height="${answer.image.height}">
          ${answer.title}
        </label>
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
        <div class="main-timer"></div>

        <h2 class="title main-title">${question}</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${ answers.map(this.generateAnswerChoiceMarkup).join(``) }
        </form>
      </div>`;
  }

  bind() {
    const answers = [...this._element.querySelectorAll(`.main-answer-r`)];
    answers.forEach((answer) => answer.addEventListener(`click`, (evt) => this.handleAnswerSubmit(evt)));

    const playerWrapper = this._element.querySelector(`.player-wrapper`);
    window.initializePlayer(playerWrapper, this.props.question.src);
  }
}
