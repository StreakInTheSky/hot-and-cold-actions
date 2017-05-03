import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessInput from './guess-input';
import * as actions from '../actions';

export class Guess extends Component {
  constructor(props) {
    super(props);

    this.submitGuess = this.submitGuess.bind(this);
  }

  componentDidUpdate() {
    if (((this.props.fewestGuesses > this.props.guesses.length) || this.props.fewestGuesses === null) && (this.props.response === 'correct')) {
      this.props.dispatch(actions.postFewestGuesses(this.props.guesses.length))
    }
  }

  submitGuess(guess, event) {
    event.preventDefault();
    this.props.dispatch(actions.compareNumber(guess));
  }

  render() {
    return <GuessInput submitGuess={this.submitGuess} response={this.props.response} guessAmount={this.props.guesses.length} />
  }
}

const mapStateToProps = (state, props) =>  ({
    guesses: state.guesses,
    response: state.response,
    fewestGuesses: state.fewestGuesses
})

export default connect(mapStateToProps)(Guess);
