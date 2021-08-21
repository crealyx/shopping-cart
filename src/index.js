import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { CartContextProvider } from './cart-context';
ReactDOM.render(
  <HashRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </HashRouter>,
  document.getElementById('root')
);
