import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import mockFetch from './api/mockFetch';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/rootReducer';
import apiMiddleware from './store/apiMiddleware';

window.fetch = mockFetch;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
console.log(store);

ReactDOM.render(<Provider store={store}><App dispatch={store.dispatch}/></Provider>, document.getElementById('root'));
registerServiceWorker();
