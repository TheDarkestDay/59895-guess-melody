export function getArtistScreenState(extensions = {}) {
  return Object.assign({
    screen: `game`,
    lives: 3,
    questionsLeft: 10,
    question: {
      type: `artist`,
      question: `Кто исполняет эту песню?`,
      src: `some-fake-url`,
      answers: [
        {
          image: {},
          title: `Artist #1`,
          isCorrect: true
        },
        {
          image: {},
          title: `Artist #2`,
          isCorrect: false
        },
        {
          image: {},
          title: `Artist #3`,
          isCorrect: false
        }
      ]
    }
  }, extensions);
}

export function getGenreScreenState(extensions = {}) {
  return Object.assign({
    screen: `game`,
    lives: 3,
    questionsLeft: 10,
    question: {
      type: `genre`,
      question: `Выберите инди-рок треки`,
      genre: `indie-rock`,
      answers: [
        {
          src: `some-fake-url`,
          genre: `indie-rock`
        },
        {
          src: `some-fake-url`,
          genre: `indie-rock`
        },
        {
          src: `some-fake-url`,
          genre: `ambient`
        },
        {
          src: `some-fake-url`,
          genre: `indie-rock`
        }
      ]
    }
  }, extensions);
}
