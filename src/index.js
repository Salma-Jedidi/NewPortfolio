import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si vous avez des styles globaux
import App from './App'; // Ou votre propre composant

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Ou un autre composant principal */}
  </React.StrictMode>
);
