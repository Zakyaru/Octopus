const DetailsObjet = ({ objet }) => {
  if (!objet) {
    return (
      <div className="h-full flex flex-col bg-blue-100 border border-gray-300">
        <div className="p-4 text-gray-500 italic flex-1 overflow-auto">
          Aucune étape sélectionnée dans HISTORIQUE.
        </div>
      </div>
    );
  }

  const linkKeys = ['ID_DOC', 'PLHARD', 'PLSOFT'];
  const ajoutKey = 'PARENT';

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
            onClick={() => window.open(`#/infos?article=${encodeURIComponent(value)}`, '_blank')}
            className="text-blue-600 underline cursor-pointer"
          >
            {value}
          </span>
        </p>
      );
    }

    return (
      <p key={key}>
        <span className="font-semibold">{key} :</span> {value}
      </p>
    );
  };

  return (
    <div className="h-full flex flex-col bg-blue-100 border border-gray-300">
      {/* Zone scrollable contenant le contenu */}
      <div className="flex-1 overflow-auto p-4 space-y-2 min-h-0">
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
    </div>
  );
};

export default DetailsObjet;