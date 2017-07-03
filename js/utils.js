

export function getAnswerIdx(input) {
  return input.value.split(`-`)[1] - 1;
}
