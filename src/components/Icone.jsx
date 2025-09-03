import logoOCTOPUS from "../assets/Logo_V2.png";
import logoSKF from "../assets/logo_skf.png";
import iconeFab from "../assets/icone_fab.png";
import iconeRep from "../assets/icone_rep.png";
import iconeDerog from "../assets/icone_derog.jpg";



/**
 * Composant Icone
 * Représente graphiquement une étape ou un état sous forme d’icône :
 * - Forme selon le TYPE (cercle, triangle, losange, image…)
 * - Couleur selon le STATUT ou le TYPE
 * - Permet l’interaction (clic) dans certains contextes
 *
 * Props :
 * - id : identifiant de l'icône (affiché sous la forme)
 * - objet : l’objet associé à cette étape (doit contenir TYPE et STATUT)
 * - onClick : fonction appelée au clic (optionnelle)
 * - isSelected : booléen indiquant si l’icône est sélectionnée (pour surlignage)
 * - isStatus / isHistorique : indiquent le contexte d'affichage (status ou historique)
 */
const Icone = ({ id, objet, onClick, isSelected, isStatus, isHistorique }) => {

    // Taille et marges conditionnelles selon le contexte (status ou historique)
    const iconSize = isStatus ? 'var(--icon-size-status)' : 'var(--icon-size-historique)';
    const iconMarginX = isStatus ? 'var(--icon-spacing-x-status)' : 'var(--icon-spacing-x-historique)';
    const iconMarginY = isStatus ? 'var(--icon-spacing-y-status)' : 'var(--icon-spacing-y-historique)';

    // Fonction de gestion du clic, si une fonction onClick est fournie
    const handleClick = () => {
        if (onClick) onClick(objet);
    };

    /**
     * Détermine le style de forme selon le type de l'étape.
     * Peut générer :
     * - cercle, carré arrondi, triangle, losange, hexagone
     * - ou même une image en fond
     */
    const getShapeStyle = (type) => {
        switch (type) {
            case 'création':
            case 'mad':
            case 'intégration':
                return { borderRadius: '50%' }; // Cercle

            case 'test':
                return {}; // Forme par défaut (carré)

            case 'fab':
                return {
                    backgroundImage: `url(${iconeFab})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                };

            case 'rep_in':
            case 'rep_out':
                return { clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }; // Triangle

            case 'constat':
            case 'analyse':
            case 'réparation':
                //return { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }; // Losange
                return {
                    backgroundImage: `url(${iconeRep})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                };

            case 'derog':
                // return {
                //     clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                // }; // Hexagone
                return {
                    backgroundImage: `url(${iconeDerog})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                };

            case 'image':
                return {
                    backgroundImage: `url(${logoOCTOPUS})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                };

            case 'image2':
                return {
                    backgroundImage: `url(${logoSKF})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                };

            default:
                return {};
        }
    };

    /**
     * Détermine la classe CSS (couleur de fond) en fonction du statut ou type.
     * Certaines formes n’ont pas de fond car ce sont des images.
     */
    const getBackgroundColorClass = (statut) => {
        switch (statut) {
            case 'OK':
                return 'bg-blue-500';
            case 'NOK':
                return 'bg-red-500';
            case 'création':
            case 'rep_in':
                return 'bg-yellow-500';
            case 'mad':
            case 'intégration':
            case 'rep_out':
                return 'bg-green-500';
            case 'derog':
                return 'bg-orange-500';
            case 'image':
            case 'image2':
                return ''; // Pas de couleur car fond image
            default:
                return 'bg-blue-500'; // Couleur par défaut
        }
    };

    return (
        <div
            style={{
                marginRight: iconMarginX,
                marginLeft: iconMarginX,
                marginTop: iconMarginY,
                marginBottom: iconMarginY,
            }}
        >
            {/* Conteneur de la forme avec clic, survol + surlignage si sélectionnée */}
            <div
                className={`${isHistorique ? 'cursor-pointer' : ''} ${isSelected ? 'ring-4 ring-black' : ''}`}
                onClick={handleClick}
            >
                <div className="relative group">
                    <div
                        className={`flex transition-all duration-200 ${getBackgroundColorClass(objet.STATUT || objet.TYPE)}`}
                        style={{
                            width: iconSize,
                            height: iconSize,
                            marginBottom: '0.25rem',
                            ...getShapeStyle(objet.TYPE),
                        }}
                    />
                    {/* Informations de survol */}
                    {isStatus && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max max-w-[200px] bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap pointer-events-none">
                            {objet.TYPE}
                            <br />
                            {objet.MOYEN}
                        </div>
                    )}
                </div>

            </div>

            {/* Affichage de l'identifiant sous la forme */}
            <div className={`bg-gray-200 flex items-center justify-center ${isSelected ? 'bg-gray-400 text-white' : ''}`}>
                {id}
            </div>
        </div>
    );
};

export default Icone;
