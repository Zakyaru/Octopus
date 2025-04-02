import Icone from "./Icone";

const Status = ({ status }) => {
    const { MODE_ACTIF, FLOW_ACTIF, PROCESS } = status;
  
    return (
      <div className="p-4 flex flex-col gap-4">
        {PROCESS.map((process) => (
          <div key={process.MODE} className="flex items-center gap-4">
            {/* Colonne gauche : le nom du MODE */}
            <div
              className={`min-w-[120px] font-semibold px-2 py-1 rounded ${
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
                  flow.MOYEN === FLOW_ACTIF.MOYEN &&
                  flow.STEP === FLOW_ACTIF.STEP &&
                  flow.SEQ_FIM === FLOW_ACTIF.SEQ_FIM;
  
                return (
                  <Icone
                    key={i}
                    id={i}
                    objet={flow}
                    isSelected={isActiveFlow}
                    disabled={true} // désactive toute interaction
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
  