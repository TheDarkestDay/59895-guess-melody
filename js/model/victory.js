
export default function createVictoryMessage(state, greatnessPercentage) {
  return {
    isVictory: true,
    title: `Вы настоящий меломан!`,
    score: `За&nbsp;${Math.floor(state.duration / 60)}&nbsp;минуты<br>вы угадали&nbsp;${10 - state.questionsLeft - 3 + state.lives} &nbsp;мелодии`,
    greatnessPercentage
  };
}
