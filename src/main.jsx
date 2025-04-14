import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // API moderne de React 18 pour le rendu
import './index.css'; // Fichier de styles global (inclut Tailwind + variables CSS)
import App from './App.jsx'; // Composant racine de l'application

/**
 * Fichier d'entrée principal
 * Monte l'application React dans l'élément HTML avec id="root"
 * et active StrictMode pour aider à détecter les erreurs et mauvaises pratiques.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
