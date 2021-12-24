import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.scss';
import { App } from 'components';
import { Provider } from 'react-redux'
import store from 'store';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
