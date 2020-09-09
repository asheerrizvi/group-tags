import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import App from './App';
import initialData from './data';

ReactDOM.render(
  <React.StrictMode>
    <App data={initialData} />
  </React.StrictMode>,
  document.getElementById('root')
);
