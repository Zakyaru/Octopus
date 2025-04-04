import React, { useState } from 'react';
import CardTitleFS from "../components/CardTitleFS";
import Historique from '../components/Historique';
import DetailsObjet from '../components/DetailsObjet';
import Status from '../components/Status';
import historique from '../data/historique.json';
import status from '../data/status.json';
import RechercheFS from '../components/RechercheFS';

// const historique = [
//     { TYPE: 'création', DATE: '2025-03-10', ACTEUR: 'PROD', STATUT: 'création' },
//     { TYPE: 'test', DATE: '2025-03-11', ACTEUR: 'PROD', STATUT: 'NOK', DETAILS: { MOYEN: 'OUTEST', STEP: 1, SEQ_FIM: 'IND-xxxx', ID_DOC: 'lien' } },
//     { TYPE: 'test', DATE: '2025-03-11', ACTEUR: 'PROD', STATUT: 'NOK', DETAILS: { MOYEN: 'OUTEST', STEP: 1, SEQ_FIM: 'IND-xxxx', ID_DOC: 'lien' } },
//     { TYPE: 'test', DATE: '2025-03-11', ACTEUR: 'PROD', STATUT: 'NOK', DETAILS: { MOYEN: 'OUTEST', STEP: 1, SEQ_FIM: 'IND-xxxx', ID_DOC: 'lien' } },
//     { TYPE: 'rep_in', DATE: '2025-03-11', ACTEUR: 'OCTOPUS', STATUT: 'rep_in' },
//     { TYPE: 'diagnostique', DATE: '2025-03-12', ACTEUR: 'REP', STATUT: 'OK', DETAILS: { MOYEN: 'diagnostique', STEP: 1, SEQ_FIM: 'IND-xxxx', COMMENTAIRE: 'problème de résistance' } },
//     { TYPE: 'réparation', DATE: '2025-03-12', ACTEUR: 'REP', STATUT: 'OK', DETAILS: { MOYEN: 'réparation', STEP: 1, SEQ_FIM: 'IND-xxxx', COMMENTAIRE: 'résistance changée' } },
//     { TYPE: 'test_rep', DATE: '2025-03-12', ACTEUR: 'REP', STATUT: 'OK', DETAILS: { MOYEN: 'test', STEP: 1, SEQ_FIM: 'IND-xxxx', COMMENTAIRE: 'ok pour réintégrer le cycle normal' } },
//     { TYPE: 'rep_out', DATE: '2025-03-12', ACTEUR: 'OCTOPUS', STATUT: 'rep_out' },
//     { TYPE: 'test', DATE: '2025-03-13', ACTEUR: 'PROD', STATUT: 'OK', DETAILS: { MOYEN: 'OUTEST', STEP: 1, SEQ_FIM: 'IND-xxxx', ID_DOC: 'lien' } },
//     { TYPE: 'test', DATE: '2025-03-13', ACTEUR: 'PROD', STATUT: 'OK', DETAILS: { MOYEN: 'OUTEST', STEP: 2, SEQ_FIM: 'IND-xxxx', ID_DOC: 'lien' } },
//     { TYPE: 'fab', DATE: '2025-03-14', ACTEUR: 'PROD', STATUT: 'OK', DETAILS: { MOYEN: 'PLHARD', STEP: 1, SEQ_FIM: 'IND-xxxx', PLHARD: 'lien' } },
//     { TYPE: 'image', DATE: '2025-03-14', ACTEUR: 'PROD', STATUT: 'image', DETAILS: { MOYEN: 'PLHARD', STEP: 1, SEQ_FIM: 'IND-xxxx', PLHARD: 'lien' } },

// ];

const Ajout = () => {
    const cardBackground = "bg-gray-100";

    const [apiResult, setApiResult] = useState(null);
    const [selectedObjet, setSelectedObjet] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClickHistorique = (objet, index) => {
        // Si on clique à nouveau sur le même index => on désélectionne
        if (selectedIndex === index) {
            setSelectedIndex(null);
            setSelectedObjet(null);
        } else {
            setSelectedIndex(index);
            setSelectedObjet(objet);
        }
    };

    return (
        <div className="p-4 space-y-4">
            {/* Ligne Recherche + Status */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Partie Recherche - largeur fixe en md+ */}
                <div className="w-full lg:w-lg lg:min-w-lg flex-shrink-0 flex flex-col bg-gray-200">
                    <RechercheFS onResult={setApiResult} />
                </div>

                {/* Partie Status - prend le reste */}
                <div className={`w-full lg:flex-1 overflow-x-auto ${cardBackground}`}>
    <div className="min-w-fit">
        <CardTitleFS cardName="STATUS" />
        <Status status={status} />
    </div>
</div>

            </div>


            {/* Historique */}
            <div className={`w-full ${cardBackground}`}>
                <CardTitleFS cardName="HISTORIQUE" />
                <Historique historique={historique} onClick={handleClickHistorique} selectedIndex={selectedIndex} />
            </div>

            {/* Détails */}
            <div className={`w-full md:w-1/2 lg:w-[700px] ${cardBackground}`} >
                <CardTitleFS cardName="Détails" />
                <DetailsObjet objet={selectedObjet} />
            </div>
        </div>
    )
};

export default Ajout