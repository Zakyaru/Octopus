import logoOCTOPUS from "../assets/Logo_V2.png";
import logoSKF from "../assets/logo_skf.png";

const Icone = ({ id, objet, onClick, isSelected, disabled}) => {

    const handleClick = () => {
        if (!disabled && onClick) onClick(objet);
      };

    /*
    A explorer : possibilité de créer une classe personnalisée "triangle" dans le fichier CSS et ensuite l'utiliser comme Tailwind
    Avantage actuel : sépare bien la forme et la couleur
    */
    const getShapeStyle = (type) => {
        switch (type) {
            case 'création':
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
            case 'rep_out':
                return 'bg-green-500';
            case 'derog':
                return 'bg-orange-500';
            case 'image':
            case 'image2':
                return '';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div
            style={{
                marginRight: 'var(--icon-spacing-x-right)',
                marginLeft: 'var(--icon-spacing-x-left)',
                marginTop: 'var(--icon-spacing-y-top)',
                marginBottom: 'var(--icon-spacing-y-bot)',
            }}
        >
            <div className={`bg-white cursor-pointer ${isSelected ? 'ring-4 ring-black' : ''}`} onClick={handleClick}>
               <div
                className={`flex transition-all duration-200 ${getBackgroundColorClass(objet.STATUT || objet.TYPE)}`}
                style={{
                    width: 'var(--icon-size)',
                    height: 'var(--icon-size)',
                    marginBottom: '0.25rem',
                    ...getShapeStyle(objet.TYPE),
                }}
        
            >
            </div> 
            </div>
            
            <div className='bg-gray-200 flex items-center justify-center'>
                {id + 1}
            </div>
        </div>

    );
};

export default Icone;