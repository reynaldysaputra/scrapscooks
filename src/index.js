import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';
import Routes from './route';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);