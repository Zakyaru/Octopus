import Icone from "./Icone";

const isValidFlow = (flow) => {
  return (
    Array.isArray(flow) &&
    flow.every(
      step =>
        step &&
        typeof step === 'object' &&
        'TYPE' in step &&
        'MOYEN' in step &&
        'STEP' in step &&
        'SEQ_FIM' in step
    )
  );
};

const isValidStatus = (status) => {
  return (
    status &&
    typeof status === 'object' &&
    typeof status.DESIGNATION === 'string' &&
    typeof status.MODE_ACTIF === 'string' &&
    status.FLOW_ACTIF && typeof status.FLOW_ACTIF === 'object' &&
    Array.isArray(status.PROCESS) &&
    status.PROCESS.length > 0
  );
};

const Status = ({ status }) => {
  if (status === null) {
    console.warn("Status non encore chargé (null)");
    return <p className="text-gray-400 italic p-2">En attente de recherche.</p>;
  }

  if (status === "__invalid__") {
    console.warn("Status invalide : échec de parsing JSON.");
    return <p className="text-red-500 italic p-2">Erreur de parsing dans le statut.</p>;
  }

  if (!isValidStatus(status)) {
    console.warn("Statut incomplet ou au mauvais format :", status);
    return <p className="text-red-500 italic p-2">Données de statut non conformes.</p>;
  }

  const { MODE_ACTIF, FLOW_ACTIF, PROCESS } = status;

  const validProcess = [];
  const invalidProcess = [];

  PROCESS.forEach(proc => {
    if (
      proc &&
      typeof proc === 'object' &&
      typeof proc.MODE === 'string' &&
      isValidFlow(proc.FLOW)
    ) {
      validProcess.push(proc);
    } else {
      invalidProcess.push(proc);
    }
  });

  if (validProcess.length === 0) {
    console.warn("Tous les PROCESS sont invalides :", PROCESS);
    return <p className="text-red-500 italic p-2">Aucun cycle valide dans le statut.</p>;
  }

  return (
    <div className="p-4 flex flex-col gap-2">
      {invalidProcess.length > 0 && (
        <p className="text-orange-500 italic px-2">
          Certains cycles ont été ignorés car mal formés ({invalidProcess.length}).
        </p>
      )}
      {validProcess.map((process) => (
        <div key={process.MODE} className="flex items-center gap-12">
          <div
            className={`min-w-[200px] text-center font-semibold px-2 py-2 rounded ${
              process.MODE === MODE_ACTIF ? 'bg-gray-400 text-white' : ''
            }`}
          >
            Cycle de {process.MODE}
          </div>

          <div className="flex gap-2">
            {process.FLOW.map((flow, i) => {
              const isActiveFlow =
                process.MODE === MODE_ACTIF &&
                JSON.stringify(flow) === JSON.stringify(FLOW_ACTIF);

              return (
                <Icone
                  key={`${process.MODE}-${i}`}
                  id={i + 1}
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
