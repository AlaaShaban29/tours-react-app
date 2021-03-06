import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Components/App/App';
import { ContextDataProvider } from './Components/ContextData';

ReactDOM.render(
  <React.StrictMode>
    <ContextDataProvider>
    <App />

    </ContextDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
