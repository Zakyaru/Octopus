import BoutonInfos from "./BoutonInfos";

/**
 * Composant CardTitleFS
 * Affiche un en-tête de carte avec :
 * - Le nom de la section (cardName)
 * - Un bouton d'information (tooltip)
 *
 * Props :
 * - cardName : nom de la section affiché à gauche
 * - className : classes CSS supplémentaires (optionnel)
 */
const CardTitleFS = ({ cardName, className = "" }) => {
    return (
        <div className={`bg-gray-200 py-3 px-4 flex items-center justify-between ${className}`}>
            {/* Nom de la carte (ex: STATUS, HISTORIQUE...) */}
            <span className="text-sm font-semibold">{cardName} :</span>

            {/* Bouton info qui peut afficher un message (tooltip, modal, etc.) */}
            <BoutonInfos message="Ceci est un message" />
        </div>
    );
};

export default CardTitleFS;
