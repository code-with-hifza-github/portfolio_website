import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure you are using 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ye 'root' ID se match hona chahiye
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
