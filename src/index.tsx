import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.scss';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
