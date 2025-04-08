import React, { useState } from 'react';
import CardTitleFS from "../components/CardTitleFS";
import Historique from '../components/Historique';
import DetailsObjet from '../components/DetailsObjet';
import Status from '../components/Status';
import RechercheFS from '../components/RechercheFS';
import Config from '../components/Config';

const Ajout = () => {
    const cardBackground = "bg-gray-100";

    const [apiResult, setApiResult] = useState(null);
    const [selectedObjet, setSelectedObjet] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClickHistorique = (objet, index) => {
        if (selectedIndex === index) {
            setSelectedIndex(null);
            setSelectedObjet(null);
        } else {
            setSelectedIndex(index);
            setSelectedObjet(objet);
        }
    };

    const parseJson = (value) => {
        try {
            return typeof value === 'string' ? JSON.parse(value) : value;
        } catch {
            return "__invalid__";
        }
    };

    const statusData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.STATUT);
    const historiqueData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.HISTORIQUE);
    const configData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.CONFIG_APPLIQUEE);

    console.log(configData);


    return (
        <div className="p-4 space-y-4">
            {/* Ligne Recherche + Status */}
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-lg lg:min-w-lg flex-shrink-0 flex flex-col bg-gray-200">
                    <RechercheFS onResult={setApiResult} />
                </div>

                <div className={`w-full lg:flex-1 overflow-x-auto ${cardBackground}`}>
                    <div className="min-w-fit">
                        <CardTitleFS cardName="STATUS" />
                        <Status status={statusData} />
                    </div>
                </div>
            </div>

            <div className={`w-full ${cardBackground}`}>
                <CardTitleFS cardName="HISTORIQUE" />
                <Historique historique={historiqueData} onClick={handleClickHistorique} selectedIndex={selectedIndex} />
            </div>

            <div className={`w-full md:w-1/2 lg:w-[700px] ${cardBackground}`}>
                <CardTitleFS cardName="Détails" />
                <DetailsObjet objet={selectedObjet} />
            </div>
            <div className={`w-full md:w-1/2 lg:w-[700px] ${cardBackground}`}>
                <CardTitleFS cardName="CONFIG" />
                <Config config={configData} />
            </div>
        </div>
    );
};

export default Ajout;
