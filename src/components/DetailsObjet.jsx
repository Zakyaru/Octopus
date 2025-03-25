const DetailsObjet = ({ objet }) => {
  if (!objet) {
    return (
      <div className="bg-blue-100 p-4 border border-gray-300 text-gray-500 italic">
        Aucun objet sélectionné.
      </div>
    );
  }

  return (
    <div className="bg-blue-100 p-4 border border-gray-300">
      <p>Type: {objet.type}</p>
      <p>Date: {objet.date}</p>
    </div>
  );
};

export default DetailsObjet;