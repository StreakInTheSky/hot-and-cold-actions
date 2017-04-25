import * as actions from '../actions';

const initialState = {
  correctAnswer: null,
  guesses: [],
  response: ''
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

    // if (checkGuess(state.guesses, action.payload)) {
    //   return Object.assign(state, {
    //     response: 'Already guessed that'
    //   })
    // } else if (action.payload === state.correctAnswer) {
    //   return Object.assign(state, {
    //     response: 'Correct!'
    //   })
    // } else if (Math.abs(action.payload - state.correctAnswer) < 20) {
    //   state.guesses.push(action.payload);
    //   return Object.assign(state, {
    //     response: 'hot'
    //   });
    // } else {
    //   state.guesses.push(action.payload);
    //   return Object.assign(state, {
    //     response: 'cold'
    //   });
    // }


    // if no guesses, set the first guess as the payload
    if (!state.guesses.length) {
      return Object.assign(state, {
        response: '',
        guesses: [...state.guesses, action.payload]
      })
    } else if (checkGuess(state.guesses, action.payload)) {
      return Object.assign(state, {
        response: 'Already guessed that.'
      })
    }
    if (action.payload === state.correctAnswer) {
      return Object.assign(state, {
        response: 'correct'
      })
    } else if (Math.abs(action.payload - state.correctAnswer) < Math.abs(state.guesses[state.guesses.length - 1] - state.correctAnswer)) {
      console.log('hotter: ', [...state.guesses, action.payload])
      return Object.assign(state, {
        response: 'hotter',
        guesses: [...state.guesses, action.payload]
      })
    } else if (Math.abs(action.payload - state.correctAnswer) > Math.abs(state.guesses[state.guesses.length - 1] - state.correctAnswer)) {
      console.log('colder: ', [...state.guesses, action.payload])
      return Object.assign(state, {
        response: 'colder',
        guesses: [...state.guesses, action.payload]
      })
    }
  }

  return state;
}
