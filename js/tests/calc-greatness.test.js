import assert from 'assert';
import calcGreatness from '../calc-greatness.js';

describe(`calc greatness function`, () => {

  it(`should return correct % of results lower than new`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 32,
      answers: 10
    };

    assert.equal(calcGreatness(newResult, previousResults), 60);
  });

  it(`should return 0% in case of no previous results`, () => {
    const previousResults = [];
    const newResult = {
      time: 32,
      answers: 10
    };

    assert.equal(calcGreatness(newResult, previousResults), 0);
  });

  it(`should properly work with same results`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 20, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 20,
      answers: 10
    };

    assert.equal(calcGreatness(newResult, previousResults), 40);
  });

  it(`should work correctly in case of best result`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 9,
      answers: 25
    };

    assert.equal(calcGreatness(newResult, previousResults), 80);
  });

  it(`should work correctly in case of worst result`, () => {
    const previousResults = [
      {time: 20, answers: 10},
      {time: 44, answers: 10},
      {time: 20, answers: 8},
      {time: 50, answers: 7}
    ];
    const newResult = {
      time: 70,
      answers: 1
    };

    assert.equal(calcGreatness(newResult, previousResults), 0);
  });
});
