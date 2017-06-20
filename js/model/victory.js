import {calcRightAnswers} from '../utils.js';

export default function createVictoryMessage(state, greatnessPercentage) {
  return {
    isVictory: true,
    title: `Вы настоящий меломан!`,
    score: `За&nbsp;${Math.floor(state.duration / 60)}&nbsp;минуты<br>вы угадали&nbsp;${calcRightAnswers(state)} &nbsp;мелодии`,
    greatnessPercentage
  };
}
