import React from 'react';

const Icone = ({ id, objet, onClick }) => {
    const getBackgroundColor = (type) => {
        switch (type) {
            case 'création':
                return 'bg-red-500';
            case 'test':
                return 'bg-green-500';
            case 'fab':
                return 'bg-blue-500';
            case 'derog':
                return 'bg-yellow-500';
            case 'mad':
                return 'bg-purple-500';
            default:
                return 'bg-black';
        }
    };

    return (
        <div
          className={`${getBackgroundColor(objet.type)} text-white flex items-center justify-center cursor-pointer`}
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