
# 🐙 Octopus — Fiche suiveuse électronique

Octopus est une application web qui permet de suivre la traçabilité d'articles électroniques à partir d'un code DATAMATRIX.

## 🚀 Fonctionnalités

- Recherche d'article par DATAMATRIX
- Visualisation du statut de l’article
- Historique des étapes
- Arborescence des sous-ensembles (config récursive)
- Détails cliquables
- Menu de navigation responsive

## 🛠️ Stack technique

- React
- React Router
- Tailwind CSS
- Vite
- react-icons

## 📁 Structure

```
src/
├── components/    # Composants réutilisables (Input, Button, Navbar, etc.)
├── pages/         # Pages principales (infos, ajout, admin)
├── services/      # Appels API
├── assets/        # Logos
├── App.jsx        # Routage de l'application
├── main.jsx       # Point d’entrée
├── index.css      # Configuration Tailwind + CSS custom
```

## 🔧 .env requis

Créer un fichier `.env` avec :
```
VITE_API_URL=http://<votre-backend>/api
```

## ▶️ Lancer le projet

```
npm install
npm run dev
```

Puis ouvrir : [http://localhost:5173/Octopus](http://localhost:5173/Octopus)

## ✅ Build production

```
npm run build
```

## ✨ Auteur

Développé par Arseni Ergin dans le cadre du projet Octopus — Traçabilité électronique.
