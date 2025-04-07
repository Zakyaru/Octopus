import logoOCTOPUS from "../assets/Logo_V2.png";
import logoSKF from "../assets/logo_skf.png";

const Icone = ({ id, objet, onClick, isSelected, isStatus, isHistorique}) => {

    const iconSize = isStatus ? 'var(--icon-size-status)' : 'var(--icon-size-historique)';
    const iconMarginX = isStatus ? 'var(--icon-spacing-x-status)' : 'var(--icon-spacing-x-historique)';
    const iconMarginY = isStatus ? 'var(--icon-spacing-y-status)' : 'var(--icon-spacing-y-historique)';

    const handleClick = () => {
        if (onClick) onClick(objet);
      };

    /*
    A explorer : possibilité de créer une classe personnalisée "triangle" dans le fichier CSS et ensuite l'utiliser comme Tailwind
    Avantage actuel : sépare bien la forme et la couleur
    */
    const getShapeStyle = (type) => {
        switch (type) {
            case 'création':
            case 'mad':
            case 'intégration':
                return {
                    borderRadius: '50%', // Cercle
                };
            case 'test':
                return {
                };
            case 'fab':
                return {
                    borderRadius: '20%', // Carré arrondi
                };
            case 'rep_in':
            case 'rep_out':
                return {
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
                };
            case 'diagnostique':
            case 'réparation':
            case 'test_rep':
                return {
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Losange
                };
            case 'derog':
                return {
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // Hexagone
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
                return '';
            default:
                return 'bg-blue-500';
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
            <div className={`${isHistorique ? 'cursor-pointer' : ''} ${isSelected ? 'ring-4 ring-black' : ''}`} onClick={handleClick}>
               <div
                className={`flex transition-all duration-200 ${getBackgroundColorClass(objet.STATUT || objet.TYPE)}`}
                style={{
                    width: iconSize,
                    height: iconSize,
                    marginBottom: '0.25rem',
                    ...getShapeStyle(objet.TYPE),
                }}
        
            >
            </div> 
            </div>
            
            <div className={`bg-gray-200 flex items-center justify-center ${isSelected ? 'bg-gray-400 text-white' : ''}`}>
                {id}
            </div>
        </div>

    );
};

export default Icone;