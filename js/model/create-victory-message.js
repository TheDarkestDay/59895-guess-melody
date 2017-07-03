import getInitialState from './get-initial-state.js';

export default function createVictoryMessage(playerResults, greatnessPercentage) {
  const initialState = getInitialState();
  return {
    isVictory: true,
    title: `Вы настоящий меломан!`,
    score: `За&nbsp;${Math.floor(initialState.duration / 60)}&nbsp;минуты<br>вы набрали&nbsp;${playerResults.answers} &nbsp;очков`,
    greatnessPercentage
  };
}
