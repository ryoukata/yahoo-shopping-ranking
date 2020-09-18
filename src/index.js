import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './App';
import * as reducers from './reducers';
import * as serviceWorker from './serviceWorker';

// Storeの生成
const store = createStore(
  // １つのReducerで完結することはほぼ無いため、最初からcombineReducersを使う実装にしておく
  combineReducers(reducers),
  // Redux Middlewareにredux-loggerを設定
  applyMiddleware(logger)
);

ReactDOM.render(
  // StoreをAppコンポーネントに紐付け
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
