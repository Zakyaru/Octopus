import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoOCTOPUS from "../assets/Logo_V4_rond.png";
import logoSKF from "../assets/logo_skf.png";

// Classe active appliquée automatiquement par NavLink
const navLinkClasses = ({ isActive }) =>
  isActive
    ? "text-blue-600 font-semibold underline"
    : "hover:underline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 py-2 px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Burger button (visible en mobile) */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden mr-4">
          <span className="text-2xl cursor-pointer">☰</span>
        </button>

        <img src={logoOCTOPUS} alt="Logo OCTOPUS" className="h-10 w-10" />
        <span className="ml-4 mr-10 font-bold text-2xl">OCTOPUS</span>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <NavLink to="/infos" className={navLinkClasses}>infos</NavLink>
          <NavLink to="/ajout" className={navLinkClasses}>ajout</NavLink>
          <NavLink to="/admin" className={navLinkClasses}>admin</NavLink>
        </div>
      </div>

      {/* Right logo always visible */}
      <img src={logoSKF} alt="Logo SKF" className="h-12" />

      {/* Burger Menu Overlay (mobile only) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="w-3/4 bg-white h-full p-5 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl cursor-pointer"
              >
                ✖
              </button>
            </div>

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
