

class QuestionGateaway {

  constructor() {
    this.url = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
    this.counter = 0;
    this.questions = [];
  }

  _getNextQuestion() {
    this.counter = this.counter === this.questions.length - 1
                    ? 0
                    : this.counter + 1;
    return this.questions[this.counter];
  }

  getNext() {
    if (this.questions.length !== 0) {
      return Promise.resolve(this._getNextQuestion());
    } else {
      return fetch(this.url)
        .then((response) => response.json())
        .then((questions) => {
          this.questions = questions;
          return this._getNextQuestion();
        });
    }
  }
}

export default new QuestionGateaway();
