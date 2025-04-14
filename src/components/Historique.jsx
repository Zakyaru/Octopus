import React from 'react';
import Icone from './Icone';

/**
 * Composant Historique
 * Affiche la liste des étapes historiques sous forme d'icônes (avec `Icone`)
 * Gère la validation des données reçues, l’affichage conditionnel
 * et la sélection d’une étape (clic utilisateur).
 *
 * Props :
 * - historique : tableau d’objets représentant les étapes (ou null/erreur)
 * - onClick : fonction appelée lorsqu'une icône est cliquée (reçoit l'objet + son index)
 * - selectedIndex : index de l’élément actuellement sélectionné
 */
const Historique = ({ historique, onClick, selectedIndex }) => {

  // Statut initial : données pas encore chargées
  if (historique === null) {
    console.warn("Historique non encore chargé (null)");
    return <p className="text-gray-400 italic p-2">En attente de recherche.</p>;
  }

  // Cas d'erreur de parsing JSON
  if (historique === "__invalid__") {
    console.warn("Historique invalide : échec de parsing JSON.");
    return <p className="text-red-500 italic p-2">Erreur de parsing dans l'historique.</p>;
  }

  // Historique doit être un tableau
  if (!Array.isArray(historique)) {
    console.warn("Historique reçu mais pas au format tableau :", historique);
    return <p className="text-red-500 italic p-2">Format inattendu pour l'historique.</p>;
  }

  // Champs obligatoires pour valider une étape d'historique
  const requiredKeys = ['ID_FLOW', 'TYPE', 'DATE', 'ACTEUR', 'STATUT'];

  // Séparation des étapes valides vs invalides
  const validItems = [];
  const invalidItems = [];

  historique.forEach(item => {
    const isValid =
      item &&
      typeof item === 'object' &&
      requiredKeys.every(k => k in item);

    if (isValid) {
      validItems.push(item);
    } else {
      invalidItems.push(item);
    }
  });

  // Tableau vide (aucune étape historique reçue)
  if (historique.length === 0) {
    console.warn("Historique est un tableau vide.");
    return <p className="text-gray-500 italic p-2">L'historique est vide.</p>;
  }

  // Aucune donnée exploitable
  if (validItems.length === 0) {
    console.warn("Tous les objets de l'historique sont invalides :", historique);
    return <p className="text-red-500 italic p-2">Aucune étape conforme au format attendu dans l'historique.</p>;
  }

  return (
    <div className="pl-2 flex flex-col gap-2">

      {/* Avertissement si certains objets ont été ignorés */}
      {invalidItems.length > 0 && (
        <p className="text-orange-500 italic px-2">
          Certaines étapes ont été ignorées car mal formées ({invalidItems.length}).
        </p>
      )}

      {/* Affichage des icônes représentant les étapes valides */}
      <div className="flex flex-wrap">
        {validItems.map((objet, index) => (
          <Icone
            key={index}
            id={objet.ID_FLOW}
            objet={objet}
            onClick={() => onClick(objet, index)}
            isSelected={selectedIndex === index}
            isHistorique={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Historique;
