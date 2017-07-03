

function compareScores(a, b) {
  if (a.answers === b.answers) {
    return a.time - b.time;
  }

  return b.answers - a.answers;
}

export default function calcGreatness(newResult, previousResults) {
  const allResults = previousResults.concat(newResult);

  allResults.sort(compareScores);

  let newResultPlace = allResults.findIndex((elem) => {
    return compareScores(newResult, elem) < 0;
  });

  if (newResultPlace === -1) {
    newResultPlace = allResults.length;
  }

  return Math.floor(((allResults.length - newResultPlace) / allResults.length) * 100);
}
