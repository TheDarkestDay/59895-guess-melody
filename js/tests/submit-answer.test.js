import assert from 'assert';
import submitAnswer from '../submit-answer.js';
import {getArtistScreenState, getGenreScreenState} from './utils.js';

describe(`submit answer function`, () => {

  it(`should track questions count`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 0);

    assert.equal(nextState.questionsLeft, initialState.questionsLeft - 1);
  });

  it(`should substract one life in case of wrong answer`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 1);

    assert.equal(nextState.lives, initialState.lives - 1);
  });

  it(`should not take life in case of right answer`, () => {
    const initialState = getArtistScreenState();
    const nextState = submitAnswer(initialState, 0);

    assert.equal(nextState.lives, initialState.lives);
  });

  it(`should treat partitionally right answer as wrong one`, () => {
    const initialState = getGenreScreenState();
    const nextState = submitAnswer(initialState, [1, 3]);

    assert.equal(nextState.lives, initialState.lives - 1);
  });

  it(`should treat fully right answer as right one`, () => {
    const initialState = getGenreScreenState();
    const nextState = submitAnswer(initialState, [0, 1, 3]);

    assert.equal(nextState.lives, initialState.lives);
  });

  it(`should send user to the "Results" screen immediately in case of zero lives`, () => {
    const initialState = getArtistScreenState({
      lives: 1
    });
    const nextState = submitAnswer(initialState, [1]);

    assert.equal(nextState.screen, `results`);
  });

  it(`should send user to the "Results" screen in case of no questions left`, () => {
    const initialState = getArtistScreenState({
      questionsLeft: 1
    });
    const nextState = submitAnswer(initialState, [1]);

    assert.equal(nextState.screen, `results`);
  });
});
