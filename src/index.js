import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from '@react-spectrum/provider';
import { defaultTheme } from '@adobe/react-spectrum';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
