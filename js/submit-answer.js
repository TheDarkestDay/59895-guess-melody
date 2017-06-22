
function checkArtistAnswer(answerIdx, question) {
  return question.answers[answerIdx].isCorrect;
}

function checkGenreAnswer(answerIdxArr, question) {
  const correctTracks = question.answers.filter((track) => track.genre === question.genre);
  const selectedTracks = answerIdxArr.map((idx) => question.answers[idx]);

  if (correctTracks.length === selectedTracks.length && selectedTracks.every((track) => track.genre === question.genre)) {
    return true;
  }

  return false;
}


function checkAnswer(answer, question) {
  if (question.type === `genre`) {
    return checkGenreAnswer(answer, question);
  } else {
    return checkArtistAnswer(answer, question);
  }
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
  const newLives = checkAnswer(answer, gameState.question)
    ? gameState.lives
    : gameState.lives - 1;

  const newState = Object.assign({}, gameState, {
    questionsLeft: gameState.questionsLeft - 1,
    lives: newLives
  });

  newState.screen = getNextScreen(newState);

  return newState;
}
