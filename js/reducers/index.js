import * as actions from '../actions';

const initialState = {
  correctAnswer: null,
  guesses: [],
  response: '',
  isClose: false
};

export const guessReducer = (state = initialState, action) => {

  if (action.type === actions.INIT_GAME) {
    const randomNumber = Math.floor(Math.random() * (100 - 1) - 1);
    return Object.assign(state, {
      correctAnswer: randomNumber,
      guesses: [],
      response: ''
    })
  } else if (action.type === actions.COMPARE_NUMBER) {

    // checks for duplicate guesses
    function checkGuess(list, guess) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === guess) {
          return true;
        }
      }
    }

    function checkClose() {
      if (Math.abs(action.payload - state.correctAnswer) < 30) {
        return Object.assign(state, {
          isClose: true
        })
      } else {
        return Object.assign(state, {
          isClose: false
        })
      }
    }

    // if no guesses, set the first guess as the payload
    if (checkGuess(state.guesses, action.payload)) {
      return Object.assign(state, {
        response: 'duplicate'
      })
    }
    if (action.payload === state.correctAnswer) {
      return Object.assign(state, {
        response: 'correct'
      })
    } else if (!state.isClose && Math.abs(action.payload - state.correctAnswer) < 30) {
      checkClose();
      return Object.assign(state, {
        response: 'hot',
        guesses: [...state.guesses, action.payload]
      });
    } else if (!state.isClose && Math.abs(action.payload - state.correctAnswer) > 30){
      checkClose();
      return Object.assign(state, {
        response: 'cold',
        guesses: [...state.guesses, action.payload]
      });
    } else if (state.isClose && Math.abs(action.payload - state.correctAnswer) < Math.abs(state.guesses[state.guesses.length - 1] - state.correctAnswer)) {
      checkClose();
      return Object.assign(state, {
        response: 'hotter',
        guesses: [...state.guesses, action.payload]
      })
    } else if (state.isClose && Math.abs(action.payload - state.correctAnswer) > Math.abs(state.guesses[state.guesses.length - 1] - state.correctAnswer)) {
      checkClose();
      let response = 'colder';
      if (!state.isClose) {
        response = 'cold';
      }
      return Object.assign(state, {
        response: response,
        guesses: [...state.guesses, action.payload]
      })
    }
  }

  return state;
}
