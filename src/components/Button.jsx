/**
 * Composant Button
 * Bouton stylisé réutilisable avec Tailwind CSS.
 *
 * Props :
 * - label : texte affiché dans le bouton
 * - onClick : fonction appelée lors du clic
 * - type : type HTML du bouton (par défaut "button")
 * - className : classes CSS supplémentaires pour personnalisation
 */
const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md
        hover:bg-blue-700 transition
        ${className} // Permet d’ajouter ou de surcharger des styles externes
      `}
    >
      {label}
    </button>
  );
};

export default Button;
