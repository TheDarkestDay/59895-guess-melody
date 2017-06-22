export default {
  type: `artist`,
  question: `Кто исполняет эту песню?`,
  src: `audio/Rooftops.mp3`,
  answers: [
    {
      title: `Silent Partner`,
      image: {
        url: `http://images.huffingtonpost.com/2014-07-01-HuffPo.Buellton.jpg`,
        width: 300,
        height: 300
      },
      isCorrect: true,
    },
    {
      title: `Lordi`,
      image: {
        url: `https://actionlist.ru/img/artist/13691/0.jpg`,
        width: 300,
        height: 300
      },
      isCorrect: false
    },
    {
      title: `Pink Floyd`,
      image: {
        url: `http://placehold.it/705x455`,
        width: 300,
        height: 300
      },
      isCorrect: false
    }
  ]
};

