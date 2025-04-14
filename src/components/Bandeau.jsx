import Button from "./Button";

/**
 * Composant Bandeau
 * Affiche un résumé en bas de la page avec :
 * - Le datamatrix de l'article traité
 * - Un bouton pour exporter (à personnaliser)
 *
 * Props :
 * - datamatrix : chaîne représentant l'identifiant de l'article en cours
 */
const Bandeau = ({ datamatrix }) => {

    // Cas 1 : en attente de résultat (aucune recherche encore faite)
    if (datamatrix === null) {
        return (
            <div>
                <p className="text-gray-400 italic">
                    En attente de recherche.
                </p>
            </div>
        );
    }

    // Cas 2 : recherche faite, mais aucun résultat trouvé
    if (datamatrix === undefined) {
        return (
            <div>
                <p className="text-orange-400 font-semibold">
                    Aucune fiche suiveuse trouvée pour cet article
                </p>
            </div>
        );
    }

    // Cas 3 : datamatrix reçu mais vide
    if (datamatrix === "") {
        return (
            <div>
                <p className="text-red-400">Erreur : datamatrix vide.</p>
            </div>
        );
    }

    // Cas 4 : affichage normal
    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                {/* Affichage de la valeur du datamatrix */}
                <p>
                    <span className="font-semibold">Fiche suiveuse de : </span>
                    <span className="font-bold">{datamatrix}</span>
                </p>

                {/* Bouton d’export PDF (à personnaliser selon la logique métier réelle) */}
                <Button
                    label="Exporter en PDF"
                    onClick={() => window.open('', '_blank')} // À remplacer par une vraie fonction
                />
            </div>
        </div>
    );
};

export default Bandeau;
