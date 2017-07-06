

export function getAnswerIdx(input) {
  return input.value.split(`-`)[1] - 1;
}

export function isChecked(checkbox) {
  return checkbox.checked;
}
