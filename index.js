import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();
render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root')
);
