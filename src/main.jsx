// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this imports your custom CSS
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
