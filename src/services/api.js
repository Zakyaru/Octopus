const BASE_URL = import.meta.env.VITE_API_URL;

export const getTableFicheSuiveuse = async (value) => {
    try {
        console.log("appel API");

        const response = await fetch(`${BASE_URL}/OCTOPUS/Get_FS_article`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ DATAMATRIX: value }),
        });

        if (!response.ok) {
            throw new Error("Erreur lors de la requête API");
        }

        return await response.json();
    } catch (error) {
        console.error("ERREUR API:", error);
        return { error: "Impossible de récupérer les données" };
    }
};
