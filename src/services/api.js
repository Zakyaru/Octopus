// Récupère l'URL de base depuis une variable d'environnement (.env)
const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * 🔄 Fonction getTableFicheSuiveuse
 * Appelle le backend pour récupérer les données d’une fiche suiveuse
 * à partir d’un identifiant DATAMATRIX.
 *
 * @param {string} value - Le DATAMATRIX de l’article à rechercher
 * @returns {Promise<object>} - Résultat JSON ou message d'erreur
 */
export const getTableFicheSuiveuse = async (value) => {
    try {
        console.log("appel API"); // Log de debug

        // Appel POST vers le backend (Node-RED, Spring, etc.)
        const response = await fetch(`${BASE_URL}/OCTOPUS/Get_FS_article`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ DATAMATRIX: value }),
        });

        // Si le serveur répond avec une erreur HTTP (404, 500, etc.)
        if (!response.ok) {
            throw new Error("Erreur lors de la requête API");
        }

        // Conversion de la réponse en JSON si tout va bien
        return await response.json();
    } catch (error) {
        // En cas d'erreur réseau, parsing, etc.
        console.error("ERREUR API:", error);
        return { error: "Impossible de récupérer les données" };
    }
};
