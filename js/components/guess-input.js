import React, { Component } from 'react';
import { connect } from 'react-redux';

import Guess from './guess';
import * as actions from '../actions';

export class GuessInput extends Component {
  constructor(props) {
    super(props);
    this.submitGuess = this.submitGuess.bind(this);
  }

  submitGuess(guess, event) {
    event.preventDefault();
    this.props.dispatch(actions.compareNumber(guess));
  }

  render() {
    return <Guess submitGuess={this.submitGuess} response={this.props.response} guessAmount={this.props.guesses.length} />
  }
}

const mapStateToProps = (state, props) => {
  console.log(state)

  return ({
    guesses: state.guesses,
    response: state.response
  })
}

export default connect(mapStateToProps)(GuessInput);
