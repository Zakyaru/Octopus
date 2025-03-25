import { useState } from "react";
import { FiInfo } from "react-icons/fi";

const BoutonInfos = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-400 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-500 focus:outline-none"
      >
        <FiInfo className="text-xl" />
      </button>

      {isOpen && (
        <>
          {/* Overlay semi-transparent */}
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsOpen(false)}></div>

          {/* Popup centrée */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white shadow-xl p-4 rounded-md border border-gray-300 z-50">
            <p className="text-sm text-gray-800">{message}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
            >
              Fermer
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BoutonInfos;