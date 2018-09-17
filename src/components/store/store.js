import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './combineReducers';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(combineReducers);

export default store;