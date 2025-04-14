import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoOCTOPUS from "../assets/logo_octopus.png";
import logoSKF from "../assets/logo_skf.png";
import { HiMenu, HiX } from "react-icons/hi";


// Fonction pour styliser les liens de navigation en fonction de leur état actif
const navLinkClasses = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold underline"
    : "hover:underline";

/**
 * Composant Navbar
 * Affiche une barre de navigation responsive avec :
 * - Le logo du projet OCTOPUS (à gauche)
 * - Des liens vers différentes pages (infos / ajout / admin)
 * - Un menu burger pour mobile
 * - Le logo SKF (à droite)
 */
const Navbar = () => {
  // Gère l’état d’ouverture du menu burger (mobile)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 py-2 px-4 flex items-center justify-between">
      {/* SECTION GAUCHE : logo + liens */}
      <div className="flex items-center">

        {/* Bouton burger visible uniquement en mobile (lg:hidden) */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden mr-4">
          <HiMenu className="text-3xl cursor-pointer" />
        </button>

        {/* Logo OCTOPUS + nom */}
        <img src={logoOCTOPUS} alt="Logo OCTOPUS" className="h-10 w-10" />
        <span className="ml-4 mr-10 font-bold text-2xl">OCTOPUS</span>

        {/* Liens visibles uniquement sur écran large (desktop) */}
        <div className="hidden lg:flex space-x-6">
          <NavLink to="/infos" className={navLinkClasses}>infos</NavLink>
          <NavLink to="/ajout" className={navLinkClasses}>ajout</NavLink>
          <NavLink to="/admin" className={navLinkClasses}>admin</NavLink>
        </div>
      </div>

      {/* SECTION DROITE : logo SKF (toujours visible) */}
      <img src={logoSKF} alt="Logo SKF" className="h-12" />

      {/* MENU BURGER MOBILE : s'affiche quand isOpen === true */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="w-3/4 bg-white h-full p-5 shadow-lg">

            {/* Bouton de fermeture du menu (croix) */}
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-2xl cursor-pointer">
                <HiX className="text-2xl cursor-pointer" />
              </button>

            </div>

            {/* Liens de navigation dans le menu mobile */}
            <ul className="mt-10 list-disc list-inside space-y-4 text-lg">
              <li>
                <NavLink to="/infos" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  infos
                </NavLink>
              </li>
              <li>
                <NavLink to="/ajout" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  ajout
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                  admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
