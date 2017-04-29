import * as actions from '../actions';

const initialState = {
  correctAnswer: null,
  guesses: [],
  response: ''
};

export const guessReducer = (state = initialState, action) => {

  if (action.type === actions.INIT_GAME) {
    const randomNumber = Math.floor(Math.random() * (100 - 1) - 1);
    return Object.assign({}, state, {
      correctAnswer: randomNumber,
      guesses: [],
      response: ''
    })
  } else if (action.type === actions.COMPARE_NUMBER) {

    const guess = parseInt(action.payload);
    const lastGuess = state.guesses[state.guesses.length - 1];
    let isClose;

    // checks for duplicate guesses
    function checkDuplicate(list, guess) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === guess) {
          return true;
        }
      }
    }

    function checkHot(num1, num2) {
      if (Math.abs(num1 - num2) < 20) {
        return true;
      }
    }

    function checkHotter(num1, num2, reference) {
      if (Math.abs(num1 - reference) < Math.abs(num2 - reference)) {
        return true;
      }

    }

    if (checkDuplicate(state.guesses, guess)) {
      return Object.assign({}, state, {
        response: 'duplicate'
      })
    }

    if (guess === state.correctAnswer) {
      return Object.assign({}, state, {
        response: 'correct'
      });
    } else if (checkHot(lastGuess, state.correctAnswer) && checkHotter(guess, lastGuess, state.correctAnswer)) {
      return Object.assign({}, state, {
        response: 'hotter',
        guesses: [...state.guesses, guess]
      });
    } else if (checkHot(lastGuess, state.correctAnswer) && !checkHotter(guess, lastGuess, state.correctAnswer)) {
      return Object.assign({}, state, {
        response: 'colder',
        guesses: [...state.guesses, guess]
      });
    } else if (checkHot(guess, state.correctAnswer)) {
      return Object.assign({}, state, {
        response: 'hot',
        guesses: [...state.guesses, guess]
      });
    } else {
      return Object.assign({}, state, {
        response: 'cold',
        guesses: [...state.guesses, guess]
      });
    }
  }

  return state;
}
