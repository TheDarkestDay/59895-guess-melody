import artistQuestion from './artist-question.js';

export default function getInitialState() {
  return {
    duration: 180,
    timeLeft: 180,
    screen: `artist`,
    lives: 3,
    questionsLeft: 10,
    question: Object.assign(artistQuestion)
  };
}
