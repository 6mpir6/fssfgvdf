import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Optionally import global styles if your build pipeline supports it
import '../public/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);