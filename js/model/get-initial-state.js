import QuestionGateaway from './question-gateaway.js';

export default function getInitialState() {
  return {
    duration: 180,
    timeLeft: 180,
    screen: `game`,
    lives: 3,
    questionsLeft: 10,
    question: Object.assign({}, QuestionGateaway.getNext())
  };
}
