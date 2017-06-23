

class QuestionGateaway {


  constructor() {
    this.url = `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
    this.counter = 0;
    this.questions = [];
  }

  _getNextQuestion() {
    this.counter += 1;
    if (this.counter === this.questions.length) {
      this.counter = 0;
    }
    return this.questions[this.counter];
  }

  getNext() {
    return new Promise((resolve, reject) => {
      if (this.questions.length !== 0) {
        resolve(this._getNextQuestion());
      } else {
        fetch(this.url)
          .then((response) => response.json())
          .then((questions) => {
            this.questions = questions;
            resolve(this.questions[this.counter]);
          });
      }
    });
  }
}

export default new QuestionGateaway();
