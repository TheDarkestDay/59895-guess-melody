import artistQuestion from './artist-question.js';


const initialState = {
  timeLeft: 90,
  screen: `artist`,
  lives: 3,
  questionsLeft: 10,
  question: Object.assign(artistQuestion)
};

export default initialState;
