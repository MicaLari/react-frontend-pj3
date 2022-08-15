import React from 'react';//coração of react
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//render react in root div from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)