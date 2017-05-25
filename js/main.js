(function () {

  const SCREEN_COUNT = 10;
  const ALT = 18;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const templates = document.querySelector(`#templates`).content;
  const mainOutlet = document.querySelector(`section.main`);
  const welcomeScreen = templates.querySelector(`.main--welcome`);
  const resultScreen = templates.querySelector(`.main--result`);
  const guessArtistScreen = templates.querySelector(`.main--level-artist`);
  const guessGenreScreen = templates.querySelector(`.main--level-genre`);
  const screens = [welcomeScreen, ...generateScreens(guessArtistScreen, guessGenreScreen, SCREEN_COUNT), resultScreen];

  function generateScreens(screenTypeA, screenTypeB, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
      let randomNum = Math.round(Math.random());
      if (randomNum === 0) {
        result.push(screenTypeA);
      } else {
        result.push(screenTypeB);
      }
    }
    return result;
  }

  function displayScreen(screenIdx) {
    mainOutlet.innerHTML = ``;
    mainOutlet.appendChild(screens[screenIdx]);
  }

  function isArrow(keyCode) {
    return keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
  }

  function getNewScreenIdx(screenIdx, arrow) {
    switch (arrow) {
      case LEFT_ARROW:
        if (screenIdx !== 0) {
          return screenIdx - 1;
        }
        break;
      case RIGHT_ARROW:
        if (screenIdx !== screens.length - 1) {
          return screenIdx + 1;
        }
        break;
    }
    return screenIdx;
  }

  let altIsPressed = false;
  let currentScreenIdx = 0;

  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ALT) {
      altIsPressed = true;
      return;
    }

    if (altIsPressed && isArrow(evt.keyCode)) {
      evt.preventDefault();
      currentScreenIdx = getNewScreenIdx(currentScreenIdx, evt.keyCode);
      displayScreen(currentScreenIdx);
    }
  });

  document.addEventListener(`keyup`, (evt) => {
    if (evt.keyCode === ALT) {
      altIsPressed = false;
    }
  });

  displayScreen(currentScreenIdx);
})();
