
function isTrackCorrect(question) {
  return function (track) {
    return track.genre === question.genre;
  };
}

function checkArtistAnswer(answerIdx, question) {
  return question.answers[answerIdx].isCorrect;
}

function checkGenreAnswer(answerIdxArr, question) {
  const correctTracks = question.answers.filter(isTrackCorrect(question));
  const selectedTracks = answerIdxArr.map((idx) => {
    return question.answers[idx];
  });

  if (correctTracks.length === selectedTracks.length && selectedTracks.every(isTrackCorrect(question))) {
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
  return gameState.screen;
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
