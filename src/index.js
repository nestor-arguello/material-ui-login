import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}