const DetailsObjet = ({ objet }) => {
  if (!objet) {
    return (
      <div className="bg-blue-100 p-4 border border-gray-300 text-gray-500 italic">
        Aucun objet sélectionné.
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 border border-gray-300 space-y-2">
      <p><span className="font-semibold">TYPE :</span> {objet.TYPE}</p>
      <p><span className="font-semibold">DATE :</span> {objet.DATE}</p>
      <p><span className="font-semibold">ACTEUR :</span> {objet.ACTEUR}</p>
      <p><span className="font-semibold">STATUT :</span> {objet.STATUT}</p>

      {objet.DETAILS && (
        <div className="mt-2 space-y-1">
          {Object.entries(objet.DETAILS).map(([key, value]) => (
            <p key={key}>
              <span className="font-semibold">{key} :</span> {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailsObjet;
