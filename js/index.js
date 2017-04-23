require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';

window.actions = actions;
window.store = store;
