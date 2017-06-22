

class QuestionGateaway {
  constructor() {
    this.url = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
    this.counter = -1;

    fetch(this.url)
      .then((response) => response.json())
      .then((questions) => {
        this.questions = questions;
      });
  }

  getNext() {
    this.counter += 1;
    if (this.counter === this.questions.length) {
      this.counter = 0;
    }
    return this.questions[this.counter];
  }
}

export default new QuestionGateaway();
