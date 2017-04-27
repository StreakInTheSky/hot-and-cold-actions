require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from './actions/index';
import store from './store';
import Game from './components/game';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Game />, document.getElementById('app'))
})
