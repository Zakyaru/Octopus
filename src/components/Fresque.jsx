import React, { useState } from 'react';
import Icone from './Icone';

const Fresque = ({ historique, onClick }) => {
  return (
      <div className="pl-2 flex flex-wrap">
        {historique.map((objet, index) => (
          <Icone key={index} id={index} objet={objet} onClick={onClick} />
        ))}
      </div>
  );
};

export default Fresque;