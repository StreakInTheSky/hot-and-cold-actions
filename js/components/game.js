import React, { Component } from 'react';
import { connect } from 'react-redux';

import Guess from './guess';
import * as actions from '../actions';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(actions.initGame());

    this.startGame = this.startGame.bind(this);
    this.showHighScore = this.showHighScore.bind(this)
  }

  startGame() {
    this.props.dispatch(actions.initGame());
  }

  showHighScore() {
    if (this.props.fewestGuesses) {
      return `High Score: ${this.props.fewestGuesses} guesses`;
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="container">
        <p className="high-score">{this.showHighScore()}</p>
        <button className="new-game btn btn-primary" onClick={this.startGame}>New Game</button>
          <Guess />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({fewestGuesses: state.fewestGuesses});

export default connect(mapStateToProps)(Game);
