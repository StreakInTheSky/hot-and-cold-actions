import React from 'react';

import Response from './response';

export default function Guess(props) {
  let guessInput = null;

  function submitGuess(event) {
    const guess = guessInput.value;
    props.submitGuess(guess, event);
  }

  return (
    <form className="form text-center">
      <h3 className="form-heading">Hot(ter) or Cold(er) Game</h3>
      <div className="form-group">
        <label htmlFor="inputGuess" className="sr-only">Guess</label>
        <input ref={ref => guessInput = ref} type="number" id="inputGuess" className="form-control" placeholder="Enter a guess between 1 and 100" required autoFocus />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={submitGuess}>Guess</button>
      </div>
      <Response response={props.response} guessAmount={props.guessAmount}/>
    </form>
  )
}
