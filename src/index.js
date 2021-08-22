import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Routes from './route';
import firebase from './config/firebase';
import { Provider } from 'react-redux';
import { MyStore } from './config/redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={MyStore}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);