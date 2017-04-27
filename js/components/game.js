import React, { Component } from 'react';

import Guess from './guess';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [2, 4, 6],
      response: "correct"
    }
    this.submitGuess = this.submitGuess.bind(this);
  }

  componentWillMount() {
    // TODO: start game on load
  }

  startGame() {
    // TODO: start new game
  }

  submitGuess() {
    // TODO: submit guess
  }

  render() {
    return (
      <div className="container">
        <button className="new-game btn btn-primary" onClick={this.startGame}>New Game</button>
        <Guess response={this.state.response} guessAmount={this.state.guesses.length} submitGuess={this.submitGuess} />
      </div>
    )
  }
}
