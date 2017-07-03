export default function getInitialState() {
  return {
    duration: 180,
    timeLeft: 180,
    score: 0,
    lastQuestionStartTime: 0,
    screen: `game`,
    lives: 3,
    questionsLeft: 10,
  };
}
