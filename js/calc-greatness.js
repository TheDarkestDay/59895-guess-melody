

function compareByTime(a, b) {
  return a.time - b.time > 0;
}

function compareNumbers(a, b) {
  return b - a;
}

export default function calcGreatness(newResult, previousResults) {
  const results = previousResults.concat(newResult);
  const resultsGroupedByAnswers = {};

  results.forEach((elem) => {
    if (resultsGroupedByAnswers[elem.answers]) {
      resultsGroupedByAnswers[elem.answers].push(elem);
    } else {
      resultsGroupedByAnswers[elem.answers] = [elem];
    }
  });

  const rating = Object.keys(resultsGroupedByAnswers)
                  .map((key) => Number(key))
                  .sort(compareNumbers)
                  .reduce((acc, current) => {
                    const sortedGroup = resultsGroupedByAnswers[current].sort(compareByTime);
                    return acc.concat(sortedGroup);
                  }, []);

  const resultsSameAsNew = rating.filter((elem) => elem.answers === newResult.answers && elem.time === newResult.time).length;
  let newResultPlace = rating.findIndex((elem) => elem.answers === newResult.answers && elem.time === newResult.time) + 1;

  if (resultsSameAsNew > 1) {
    newResultPlace += resultsSameAsNew - 1;
  }

  return ((results.length - newResultPlace) / results.length) * 100;
}
