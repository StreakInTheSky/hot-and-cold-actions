import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessInput from './guess-input';
import * as actions from '../actions';

export class Game extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
  }

  startGame() {
    this.props.dispatch(actions.initGame());
  }

  componentWillMount() {
    this.props.dispatch(actions.initGame());
  }


  render() {
    return (
      <div className="container">
        <button className="new-game btn btn-primary" onClick={this.startGame}>New Game</button>
          <GuessInput />
      </div>
    )
  }
}

export default connect()(Game);
