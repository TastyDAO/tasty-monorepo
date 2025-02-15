import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChainSubscriber from './components/ChainSubscriber';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={provider => new providers.Web3Provider(provider)}>
      <BrowserRouter>
        <ChainSubscriber />
        <App />
      </BrowserRouter>
    </Web3ReactProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
