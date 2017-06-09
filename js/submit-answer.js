
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

export default function submitAnswer(gameState, answer) {
  const newLives = checkAnswer(answer, gameState.question.rightAnswer)
    ? gameState.lives
    : gameState.lives - 1;

  return Object.assign({}, gameState, {
    questionsLeft: gameState.questionsLeft - 1,
    lives: newLives,
    screen: newLives === 0 || gameState.questionsLeft === 1 ? `results` : gameState.screen
  });
}
