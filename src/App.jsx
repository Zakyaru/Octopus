import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Infos from "./pages/infos";
import Ajout from "./pages/ajout";
import Admin from "./pages/admin";

/**
 * Composant App
 * Point d'entrée principal de l'application React.
 * Définit la structure globale avec :
 * - Un système de routing (HashRouter)
 * - Une barre de navigation fixe (Navbar)
 * - Trois pages principales : Infos, Ajout, Admin
 */
const App = () => {
  return (
    <Router>
      {/* Barre de navigation toujours visible */}
      <Navbar />

      {/* Définition des routes vers les pages principales */}
      <Routes>
        <Route path="/infos" element={<Infos />} />
        <Route path="/ajout" element={<Ajout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
