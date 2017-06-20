

export function getAnswerIdx(input) {
  return input.value.split(`-`)[1] - 1;
}

export function calcRightAnswers(state) {
  const QUESTIONS_COUNT = 10;
  const INITIAL_LIVES = 3;

  return QUESTIONS_COUNT - state.questionsLeft - INITIAL_LIVES + state.lives;
}
