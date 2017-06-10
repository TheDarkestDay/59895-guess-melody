export function getArtistScreenState(extensions = {}) {
  return Object.assign({
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
  }, extensions);
}

export function getGenreScreenState(extensions = {}) {
  return Object.assign({
    screen: `genre`,
    lives: 3,
    questionsLeft: 10,
    question: {
      rightAnswer: [0, 1, 3],
      answers: [
        {
          audioUrl: `some-fake-url`
        },
        {
          audioUrl: `some-fake-url`
        },
        {
          audioUrl: `some-fake-url`
        },
        {
          audioUrl: `some-fake-url`
        }
      ]
    }
  }, extensions);
}
