/**
 * Composant DetailsObjet
 * Affiche les informations détaillées d'une étape sélectionnée dans l’historique.
 * Si aucun objet n'est sélectionné, un message d'information est affiché.
 *
 * Props :
 * - objet : objet représentant une étape sélectionnée (peut contenir un champ DETAILS)
 */
const DetailsObjet = ({ objet }) => {

  // Si aucun objet sélectionné → affichage d’un message
  if (!objet) {
    return (
      <div className="h-full flex flex-col bg-blue-100 border border-gray-300">
        <div className="p-4 text-gray-500 italic flex-1 overflow-auto">
          Aucune étape sélectionnée dans HISTORIQUE.
        </div>
      </div>
    );
  }

  // Clés qui doivent être cliquables mais mènent vers des liens "neutres"
  const linkKeys = ['ID_DOC', 'PLHARD', 'PLSOFT'];

  // Clé spéciale qui redirige vers une autre fiche suiveuse
  const ajoutKey = 'PARENT';

  /**
   * Génère une ligne de détail pour une paire clé/valeur
   * - Si la clé est dans `linkKeys` → lien cliquable (comportement fictif)
   * - Si la clé est `PARENT` → lien vers la page infos avec article=valeur
   * - Sinon → simple texte
   */
  const renderDetailLine = (key, value) => {
    if (linkKeys.includes(key)) {
      return (
        <p key={key}>
          <span className="font-semibold">{key} :</span>{' '}
          <span
            onClick={() => window.open('', '_blank')} // TODO : définir une vraie URL si nécessaire
            className="text-blue-600 underline cursor-pointer"
          >
            {value}
          </span>
        </p>
      );
    }

    if (key === ajoutKey) {
      return (
        <p key={key}>
          <span className="font-semibold">{key} :</span>{' '}
          <span
            onClick={() => window.open(`#/infos?article=${encodeURIComponent(value)}`, '_blank')}
            className="text-blue-600 underline cursor-pointer"
          >
            {value}
          </span>
        </p>
      );
    }

    // Cas par défaut : simple ligne texte
    return (
      <p key={key}>
        <span className="font-semibold">{key} :</span> {value}
      </p>
    );
  };

  return (
    <div className="h-full flex flex-col bg-blue-100 border border-gray-300">

      {/* Contenu scrollable */}
      <div className="flex-1 overflow-auto p-4 space-y-2 min-h-0">

        {/* Informations principales de l’étape */}
        <p><span className="font-semibold">TYPE :</span> {objet.TYPE}</p>
        <p><span className="font-semibold">DATE :</span> {objet.DATE}</p>
        <p><span className="font-semibold">ACTEUR :</span> {objet.ACTEUR}</p>
        <p><span className="font-semibold">STATUT :</span> {objet.STATUT}</p>

        {/* Affichage des détails supplémentaires s’ils existent */}
        {objet.DETAILS && (
          <div className="mt-2 space-y-1">
            {Object.entries(objet.DETAILS).map(([key, value]) => renderDetailLine(key, value))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsObjet;
