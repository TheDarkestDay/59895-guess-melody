
function checkAnswer(submited, correct) {
  if (typeof submited === `number`) {
    return submited === correct;
  }

  if (submited.length === correct.length) {
    const wrongValues = submited.filter((elem) => correct.indexOf(elem) === -1);

    return wrongValues.length === 0;
  }

  return false;
}

function getNextScreen(gameState) {
  if (gameState.lives === 0 || gameState.timeLeft === 0 || gameState.questionsLeft === 0) {
    return `results`;
  }

  const randomNum = Math.random();
  if (randomNum > 0.5) {
    return `genre`;
  }

  return `artist`;
}

export default function submitAnswer(gameState, answer) {
  const newLives = checkAnswer(answer, gameState.question.rightAnswer)
    ? gameState.lives
    : gameState.lives - 1;

  const newState = Object.assign({}, gameState, {
    questionsLeft: gameState.questionsLeft - 1,
    lives: newLives
  });

  newState.screen = getNextScreen(newState);

  return newState;
}
