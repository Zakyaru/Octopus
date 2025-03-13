import React from 'react';

const Icone = ({ id, objet, onClick }) => {
    return (
        <div
          className="bg-blue-500 text-white flex items-center justify-center cursor-pointer"
          style={{
            width: 'var(--icon-size)',
            height: 'var(--icon-size)',
            marginRight: 'var(--icon-spacing-x)',
            marginBottom: 'var(--icon-spacing-y)',
          }}
          onClick={() => onClick(objet)}
        >
          {id}
        </div>
      );
};

export default Icone;