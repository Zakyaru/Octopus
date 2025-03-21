import { useState } from "react";
import { Link } from "react-router-dom";
import logoOCTOPUS from "../assets/Logo_V4_rond.png";
import logoSKF from "../assets/logo_skf.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 py-2 px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center">
        <button onClick={() => setIsOpen(true)} className="md:hidden mr-4">
          <span className="text-2xl">☰</span>
        </button>
        <img src={logoOCTOPUS} alt="Logo" className="h-10 w-10" />
        <span className="ml-4 mr-10 font-bold text-2xl">OCTOPUS</span>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/infos" className="hover:underline">infos</Link>
          <Link to="/ajout" className="hover:underline">ajout</Link>
          <Link to="/admin" className="hover:underline">admin</Link>
        </div>
      </div>

      {/* Right Logo Always Visible */}
      <img src={logoSKF} alt="SKF Logo" className="h-12" />

      {/* Burger Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="w-3/4 bg-white h-full p-5 shadow-lg">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-2xl">
              ✖
            </button>
          </div>
            
            <div className="mt-10 flex flex-col space-y-4 text-lg">
              <Link to="/infos" className="hover:underline" onClick={() => setIsOpen(false)}>infos</Link>
              <Link to="/ajout" className="hover:underline" onClick={() => setIsOpen(false)}>ajout</Link>
              <Link to="/admin" className="hover:underline" onClick={() => setIsOpen(false)}>admin</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
