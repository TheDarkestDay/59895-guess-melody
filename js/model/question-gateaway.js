

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
    return new Promise((resolve, reject) => {
      if (this.questions.length !== 0) {
        resolve(this._getNextQuestion());
      } else {
        fetch(this.url)
          .then((response) => response.json())
          .then((questions) => {
            this.questions = questions;
            resolve(this.questions[this.counter]);
          })
          .catch((err) => reject(err));
      }
    });
  }
}

export default new QuestionGateaway();
