import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import ConfigureStore from './redux/configureStore';

const store = ConfigureStore();

render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
