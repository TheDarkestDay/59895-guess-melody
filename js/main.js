(function () {
  const SCREEN_COUNT = 10;

  function generateScreens(screenTypeA, screenTypeB, count = SCREEN_COUNT) {
    const mapRandomNumToType = {
      0: screenTypeA,
      1: screenTypeB
    };

    let result = [];
    for (let i = 0; i < count; i++) {
      let randomNum = Math.round(Math.random());
      result.push(mapRandomNumToType[randomNum]);
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

  const templates = document.querySelector(`#templates`).content;
  const mainOutlet = document.querySelector(`section.main`);
  const welcomeScreen = templates.querySelector(`.main--welcome`);
  const resultScreen = templates.querySelector(`.main--result`);
  const guessArtistScreen = templates.querySelector(`.main--level-artist`);
  const guessGenreScreen = templates.querySelector(`.main--level-genre`);
  const screens = generateScreens(guessArtistScreen, guessGenreScreen);
  const ALT = 18;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  const screenChangers = {
    [LEFT_ARROW]: () => {
      if (currentScreenIdx !== 0) {
        currentScreenIdx -= 1;
      }
    },
    [RIGHT_ARROW]: () => {
      if (currentScreenIdx !== SCREEN_COUNT + 1) {
        currentScreenIdx += 1;
      }
    }
  };

  let altIsPressed = false;
  let currentScreenIdx = 0;

  screens.unshift(welcomeScreen);
  screens.push(resultScreen);

  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === ALT) {
      altIsPressed = true;
      return;
    }
    if (altIsPressed && isArrow(evt.keyCode)) {
      evt.preventDefault();
      screenChangers[evt.keyCode]();
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
