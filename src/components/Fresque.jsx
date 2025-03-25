import React, { useState } from 'react';
import Icone from './Icone';

const Fresque = ({ objets, onClick }) => {
  return (
      <div className="pl-2 flex flex-wrap">
        {objets.map((objet, index) => (
          <Icone key={index} id={index} objet={objet} onClick={onClick} />
        ))}
      </div>
  );
};

export default Fresque;