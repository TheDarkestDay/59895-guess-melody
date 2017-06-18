
const initialState = {
  timeLeft: 90,
  screen: `artist`,
  lives: 3,
  questionsLeft: 10,
  question: {
    rightAnswer: 0,
    answers: [
      {
        artist: `Artist #1`
      },
      {
        artist: `Artist #2`
      },
      {
        artist: `Artist #3`
      }
    ]
  }
};

export default initialState;
