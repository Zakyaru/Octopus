import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Infos from "./pages/infos";
import Ajout from "./pages/ajout";
import Admin from "./pages/admin";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/infos" element={<Infos />} />
        <Route path="/ajout" element={<Ajout />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;