import logoOCTOPUS from "../assets/Logo_V2.png";
import logoSKF from "../assets/logo_skf.png";

const Icone = ({ id, objet, onClick }) => {

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
            case 'repIn':
            case 'repOut':
                return {
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Triangle
                };
            case 'derog':
                return {
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Losange
                };
            case 'mad':
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

    const getBackgroundColorClass = (type) => {
        switch (type) {
            case 'création':
                return 'bg-yellow-500';
            case 'test':
                return 'bg-blue-500';
            case 'fab':
                return 'bg-blue-500';
            case 'repIn':
                return 'bg-yellow-500'
            case 'repOut':
                return 'bg-green-500'
            case 'derog':
                return 'bg-orange-500';
            case 'mad':
                return 'bg-green-500';
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
                marginBottom: 'var(--icon-spacing-y)',
            }}
        >
            <div
                className={`flex cursor-pointer ${getBackgroundColorClass(objet.type)}`}
                style={{
                    width: 'var(--icon-size)',
                    height: 'var(--icon-size)',
                    ...getShapeStyle(objet.type),
                }}
                onClick={() => onClick(objet)}
            >
            </div>
            <div className='bg-gray-100 flex items-center justify-center'>
                {id + 1}
            </div>
        </div>

    );
};

export default Icone;