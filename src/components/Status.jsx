import Icone from "./Icone";

const Status = ({ status }) => {
    const { MODE_ACTIF, FLOW_ACTIF, PROCESS } = status;
  
    return (
      <div className="p-4 flex flex-col gap-2">
        {PROCESS.map((process) => (
          <div key={process.MODE} className="flex items-center gap-12">
            {/* Colonne gauche : le nom du MODE */}
            <div
              className={`min-w-[200px] text-center font-semibold px-2 py-2 rounded ${
                process.MODE === MODE_ACTIF ? 'bg-gray-400 text-white' : ''
              }`}
            >
              Cycle de {process.MODE}
            </div>
  
            {/* Colonne droite : les icônes pour ce MODE */}
            <div className="flex gap-2">
              {process.FLOW.map((flow, i) => {
                const isActiveFlow =
                  process.MODE === MODE_ACTIF &&
                  JSON.stringify(flow) === JSON.stringify(FLOW_ACTIF);
  
                return (
                  <Icone
                    key={`${process.MODE}-${i}`}
                    id={i+1}
                    objet={flow}
                    isSelected={isActiveFlow}
                    isStatus={true}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Status;
  