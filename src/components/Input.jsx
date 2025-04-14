/**
 * Composant Input
 * Champ de saisie stylisé avec Tailwind.
 * Il est réutilisable et personnalisable via des props.
 *
 * Props :
 * - placeholder : texte affiché quand le champ est vide (par défaut "")
 * - value : valeur actuelle du champ (controlled component)
 * - onChange : fonction appelée à chaque changement de valeur
 * - className : classes CSS supplémentaires pour ajuster le style
 */
const Input = ({ placeholder = "", value, onChange, className = "" }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
                bg-gray-100 border border-gray-300 rounded-full px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${className}  // permet de personnaliser davantage le style depuis l'extérieur
            `}
        />
    );
};

export default Input;
