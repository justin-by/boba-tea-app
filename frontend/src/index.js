import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as sessionActions from './store/session'
import * as drinkActions from './store/drinks'

import { ModalProvider } from './context/Modal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { restoreCSRF, csrfFetch } from './store/csrf';

import configureStore from './store';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.drinkActions = drinkActions;
}

function Root() {
  return (
  <Provider store={store}>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
