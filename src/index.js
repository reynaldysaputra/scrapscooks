import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Routes from './route';
import firebase from './config/firebase';
import { Provider } from 'react-redux';
import { MyStore } from './config/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={MyStore}>
      <Routes/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);