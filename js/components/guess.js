import React from 'react';

import Response from './response';
export default function Guess(props) {
  return (
    <form className="form text-center">
      <h3 className="form-signin-heading">Hot(ter) or Cold(er) Game</h3>
      <div className="form-group">
        <label htmlFor="inputGuess" className="sr-only">Guess</label>
        <input type="number" id="inputGuess" className="form-control" placeholder="Enter a guess between 1 and 100" required autoFocus />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={props.submitGuess}>Submit</button>
      </div>
      <Response response={props.response} guessAmount={props.guessAmount}/>
    </form>
  )
}
