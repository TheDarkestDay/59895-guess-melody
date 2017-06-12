import AbstractView from './abstract-view.js';

export default class WelcomeView extends AbstractView {
  get template() {
    const {title, rules} = this.props;
    return `
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">${title}</h2>
      <p class="text main-text">
        ${rules}
      </p>`;
  }

  bind() {
    const playBtn = this._element.querySelector(`.main-play`);

    playBtn.addEventListener(`click`, () => {
      this.handleClick();
    });
  }
}
