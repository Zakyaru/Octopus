const DetailsObjet = ({ objet }) => {
  if (!objet) {
    return (
      <div className="bg-blue-100 p-4 border border-gray-300 text-gray-500 italic">
        Aucune étape sélectionnée dans HISTORIQUE.
      </div>
    );
  }

  // Liste des clés avec comportement spécifique
  const linkKeys = ['ID_DOC', 'PLHARD', 'PLSOFT'];
  const ajoutKey = 'PARENT';

  // Fonction qui gère l’affichage dynamique en fonction de la clé
  const renderDetailLine = (key, value) => {
    if (linkKeys.includes(key)) {
      return (
        <p key={key}>
          <span className="font-semibold">{key} :</span>{' '}
          <span
            onClick={() => window.open('', '_blank')}
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
            onClick={() => window.open(`#/ajout?article=${encodeURIComponent(value)}`, '_blank')}
            className="text-blue-600 underline cursor-pointer"
          >
            {value}
          </span>
        </p>
      );
    }

    // Cas par défaut (clé standard)
    return (
      <p key={key}>
        <span className="font-semibold">{key} :</span> {value}
      </p>
    );
  };

  return (
    <div className="bg-blue-100 p-4 border border-gray-300 space-y-2">
      <p><span className="font-semibold">TYPE :</span> {objet.TYPE}</p>
      <p><span className="font-semibold">DATE :</span> {objet.DATE}</p>
      <p><span className="font-semibold">ACTEUR :</span> {objet.ACTEUR}</p>
      <p><span className="font-semibold">STATUT :</span> {objet.STATUT}</p>

      {objet.DETAILS && (
        <div className="mt-2 space-y-1">
          {Object.entries(objet.DETAILS).map(([key, value]) => renderDetailLine(key, value))}
        </div>
      )}
    </div>
  );
};

export default DetailsObjet;
