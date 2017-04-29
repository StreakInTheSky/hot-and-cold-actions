import React from 'react'

export default function Response(props) {
  function getResponse() {
    if (props.response === 'duplicate') {
      return <div className="alert alert-warning" role="alert">You already guessed that.</div>
    } else if (props.response === 'correct') {
      return <div className="alert alert-success" role="alert">Correct! It only took you <strong>{props.guessAmount}</strong> guesses.</div>
    } else if (props.response === 'hot') {
      return <div className="alert alert-danger" role="alert">Hot!</div>
    } else if (props.response === 'hotter') {
      return <div className="alert alert-danger" role="alert">Hotter!</div>
    } else if (props.response === 'cold') {
      return <div className="alert alert-info" role="alert">cold...</div>
    } else if (props.response === 'colder') {
      return <div className="alert alert-info" role="alert">colder.</div>
    } else if (!props.response) {
      return null;
    }
  }

  return getResponse()
}
