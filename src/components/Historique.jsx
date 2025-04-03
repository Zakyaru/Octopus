import React, { useState } from 'react';
import Icone from './Icone';

const Historique = ({ historique, onClick, selectedIndex }) => {
  return (
    <div className="pl-2 flex flex-wrap">
      {historique.map((objet, index) => (
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
  );
};

export default Historique;