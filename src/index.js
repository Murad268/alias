import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))
root.render(
  <Provider store={store}><App /></Provider>
);


