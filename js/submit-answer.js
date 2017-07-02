
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

const BONUS_THRESHOLD = 10;

export default function submitAnswer(gameState, answer) {
  const isAnswerCorrect = checkAnswer(answer, gameState.question);
  let newLives = gameState.lives;
  let newScore = gameState.score;

  if (isAnswerCorrect) {
    newScore = (gameState.timeLeft - gameState.lastQuestionStartTime) < BONUS_THRESHOLD
      ? newScore + 2
      : newScore + 1;
  } else {
    newLives = newLives - 1;
  }

  const newState = Object.assign({}, gameState, {
    questionsLeft: gameState.questionsLeft - 1,
    lives: newLives,
    score: newScore
  });

  newState.screen = getNextScreen(newState);

  return newState;
}
