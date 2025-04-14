import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Plugin React optimisé avec SWC (super rapide)
import tailwindcss from '@tailwindcss/vite'; // Intégration Tailwind CSS avec Vite
import { viteSingleFile } from 'vite-plugin-singlefile'; // Plugin pour bundler tout en un seul fichier HTML

// https://vitejs.dev/config/ → Doc officielle

/**
 * Configuration Vite pour le projet Octopus
 */
export default defineConfig({
  // Chemin de base pour le déploiement statique (utile pour GitHub Pages ou serveur sous dossier)
  base: "/Octopus/",

  // Plugins utilisés :
  plugins: [
    react(),           // Active React + JSX
    tailwindcss(),     // Active Tailwind via le plugin officiel
    viteSingleFile(),  // Permet d’exporter l’app en un seul fichier HTML+JS+CSS
  ],
});
