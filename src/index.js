import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "./css/blog.css";
import './css/reactout-page.css';
import App from './App';
import { AppProvider } from "./context/AppContext";


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

