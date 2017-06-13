import AbstractView from './abstract-view.js';

export default class ResultsView extends AbstractView {
  get template() {
    const {title, score, isVictory, greatnessPercentage} = this.props;
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${title}</h2>
      <div class="main-stat">${score}</div>
      ${ isVictory ? `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${greatnessPercentage}%&nbsp;игроков</span>` : ``}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    `;
  }

  bind() {
    const replayButton = this._element.querySelector(`.main-replay`);

    replayButton.addEventListener(`click`, this.handleClick);
  }
}
