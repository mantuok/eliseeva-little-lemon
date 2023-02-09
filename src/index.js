import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer } from './store/reducer';
import './sass/style.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(
  reducer,
  composeWithDevTools());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
