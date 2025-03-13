import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { getTableFicheSuiveuse } from "../services/api.js"

const RechercheFS = ({ onResult }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = async () => {
        if (!searchValue.trim()) return; // Evite d'envoyer des requêtes vides
        const result = await getTableFicheSuiveuse(searchValue);
        onResult(result); // Remonte la réponse de l'API
    };

    return(
        <div className="bg-gray-200 p-6 rounded-md shadow-md max-w-lg mx-auto text-center">
            <h2 className="text-xl font-bold mb-8">Recherche d'article par DATAMATRIX</h2>
            <div className="flex flex-col items-center gap-4">
                <Input
                placeholder="SNXXX PN(CC)NOM"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full sm:max-w-lg px-4 py-2"
                />
                <Button label="Rechercher" onClick={handleSearch} className="w-full sm:max-w-3xs px-6 py-2" />
            </div>            
        </div>
    );
};

export default RechercheFS