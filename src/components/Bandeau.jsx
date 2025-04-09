import Button from "./Button";

const Bandeau = ({ datamatrix }) => {
    if (datamatrix === null) {
        return (
            <div>
                <p className="text-gray-400 italic">
                    En attente de recherche.
                </p>
            </div>
        );
    }

    if (datamatrix === undefined) {
        return (
            <div>
                <p className="text-orange-400 font-semibold">
                    Aucune fiche suiveuse trouvée pour cet article
                </p>
            </div>
        );
    }

    if (datamatrix === "") {
        return (
            <div>
                <p className="text-red-400">Erreur : datamatrix vide.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <p>
                    <span className="font-semibold">Fiche suiveuse de : </span>
                    <span className="font-bold">{datamatrix}</span>
                </p>
                <Button label="Exporter en PDF" onClick={() => window.open('', '_blank')} />
            </div>
        </div>
    );
};

export default Bandeau;
