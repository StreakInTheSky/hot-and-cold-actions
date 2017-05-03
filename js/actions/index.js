import 'isomorphic-fetch';

// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = () => ({
    type: INIT_GAME
});

// compare numbers
export const COMPARE_NUMBER = 'COMPARE_NUMBER';
export const compareNumber = guess => ({
    type: COMPARE_NUMBER,
    payload: guess
});

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (data) => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    payload: data
});

export const FETCH_FEWEST_GUESSES_ERROR= 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (error) => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    payload: error
});

export const fetchFewestGuesses = () => dispatch => {
  const url = `http://localhost:3000/fewest-guesses`;
  return fetch(url).then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(({fewestGuesses}) => {
    dispatch(fetchFewestGuessesSuccess(fewestGuesses))
  })
  .catch(error =>
    dispatch(fetchFewestGuessesError(error))
  );
}

export const postFewestGuesses = fewestGuesses => dispatch => {
  const url = `http://localhost:3000/fewest-guesses`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fewestGuesses })
  }
  return fetch(url, options).then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
  })
  .then(() => dispatch(fetchFewestGuesses()))
  .catch(error => console.error(error)
  );
}
