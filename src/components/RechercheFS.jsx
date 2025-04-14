import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { getTableFicheSuiveuse } from "../services/api.js"

/**
 * Composant de recherche de fiche suiveuse par DATAMATRIX
 * Permet à l'utilisateur d'entrer un identifiant (type SNXXX PN(CC)NOM)
 * et d'effectuer une requête vers l'API.
 * 
 * Props :
 * - onResult : fonction de callback appelée avec la réponse de l'API
 */
const RechercheFS = ({ onResult }) => {

    // Valeur actuelle de l'input (champ de recherche)
    const [searchValue, setSearchValue] = useState("");

    /**
     * Fonction exécutée lors du clic sur le bouton "Rechercher"
     * Appelle l'API avec la valeur saisie, et transmet le résultat
     */
    const handleSearch = async () => {
        if (!searchValue.trim()) return; // Évite les requêtes vides ou avec des espaces seulement
        const result = await getTableFicheSuiveuse(searchValue);
        onResult(result); // Remonte le résultat au composant parent (ex: Infos.jsx)
        setSearchValue(""); //Vide le champ après la recherche
    };

    return (
        <div className="flex flex-col justify-center w-full h-full px-6 py-10 border-3 text-center">
          {/* Titre de la section */}
          <h2 className="text-xl font-bold mb-10">Recherche d'article par DATAMATRIX</h2>

          {/* Champ de saisie + bouton de recherche */}
          <div className="flex flex-col items-center gap-6">

            {/* Champ texte pour entrer la valeur de recherche */}
            <Input
              placeholder="SNXXX PN(CC)NOM"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full sm:max-w-lg"
            />

            {/* Bouton pour lancer la recherche */}
            <Button
              label="Rechercher"
              onClick={handleSearch}
              className="w-full sm:max-w-3xs"
            />
          </div>
        </div>
    );
};

export default RechercheFS;
