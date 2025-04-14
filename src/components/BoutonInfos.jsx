import { useState } from "react";
import { FiInfo } from "react-icons/fi";

/**
 * Composant BoutonInfos
 * Affiche un bouton avec une icône d'information (ℹ️).
 * Lorsqu'on clique dessus, une popup s'affiche au centre de l'écran avec un message.
 *
 * Props :
 * - message : texte à afficher dans la fenêtre d'information
 */
const BoutonInfos = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false); // Gère l'affichage de la popup

  return (
    <div className="relative inline-block">
      
      {/* Bouton circulaire avec icône info */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-400 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-500 focus:outline-none"
      >
        <FiInfo className="text-xl" />
      </button>

      {/* Si la popup est ouverte, on affiche le contenu */}
      {isOpen && (
        <>
          {/* Overlay sombre qui ferme la popup au clic */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Contenu de la popup centré dans l'écran */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white shadow-xl p-4 rounded-md border border-gray-300 z-50">
            {/* Message informatif */}
            <p className="text-sm text-gray-800">{message}</p>

            {/* Bouton pour fermer la popup */}
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
