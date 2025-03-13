import React, { useState } from 'react';
import Icone from './Icone';
import DétailsObjet from './DetailsObjet';

const Fresque = ({ objets }) => {
  const [selectedObjet, setSelectedObjet] = useState(null);

  return (
    <div>
      <div className="flex flex-wrap">
        {objets.map((objet, index) => (
          <Icone key={index} id={index} objet={objet} onClick={setSelectedObjet} />
        ))}
      </div>
      {selectedObjet && <DétailsObjet objet={selectedObjet} />}
    </div>
  );
};

export default Fresque;