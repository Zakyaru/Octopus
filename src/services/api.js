export const getTableFicheSuiveuse = async (value) => {
    try {
        const response = await fetch("http://localhost:1880/OCTOPUS/Get_FS_article", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ DATA_MATRIX: value }),
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