import BoutonInfos from "./BoutonInfos";

const CardTitleFS = ({ cardName, className = "" }) => {
    return (
        <div className={`bg-gray-200 py-3 px-4 flex items-center justify-between ${className}`}>
            <span className="text-sm font-semibold">{cardName} :</span>
            <BoutonInfos message="Ceci est un message" />
        </div>
    );
};

export default CardTitleFS;