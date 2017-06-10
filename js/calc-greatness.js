

function compareScores(a, b) {
  if (a.answers === b.answers) {
    return a.time - b.time;
  }

  return b.answers - a.answers;
}

export default function calcGreatness(newResult, previousResults) {
  const allResults = previousResults.concat(newResult);

  allResults.sort(compareScores);

  const resultsSameAsNew = allResults.filter((elem) => elem.answers === newResult.answers && elem.time === newResult.time).length;
  let newResultPlace = allResults.findIndex((elem) => elem.answers === newResult.answers && elem.time === newResult.time) + 1;

  if (resultsSameAsNew > 1) {
    newResultPlace += resultsSameAsNew - 1;
  }

  return Math.floor(((allResults.length - newResultPlace) / allResults.length) * 100);
}
