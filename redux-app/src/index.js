import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/themeSlice';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);