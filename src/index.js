import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: 'AIzaSyDfwZbGwU9vyYVHg1y-0nOYI4OmImTHg3Q',
  authDomain: 'pizzas-store.firebaseapp.com',
  databaseURL: 'https://pizzas-store.firebaseio.com',
  projectId: 'pizzas-store',
  storageBucket: 'pizzas-store.appspot.com',
  messagingSenderId: '339360777325',
  appId: '1:339360777325:web:8362eec46c8ca7a11e6b64'
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
