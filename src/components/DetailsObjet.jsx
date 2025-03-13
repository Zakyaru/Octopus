import React from 'react';

const DetailsObjet = ({ objet }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300">
      <p>Type: {objet.type}</p>
      <p>Date: {objet.date}</p>
    </div>
  );
};

export default DetailsObjet;