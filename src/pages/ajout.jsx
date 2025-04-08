import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTableFicheSuiveuse } from '../services/api.js';
import CardTitleFS from "../components/CardTitleFS";
import Historique from '../components/Historique';
import DetailsObjet from '../components/DetailsObjet';
import Status from '../components/Status';
import RechercheFS from '../components/RechercheFS';
import Config from '../components/Config';

const Ajout = () => {
    const cardBackground = "bg-gray-100";

    const [apiResult, setApiResult] = useState(null);

    const [searchParams] = useSearchParams();
    const articleParam = searchParams.get('article');

    // Appeler automatiquement la recherche si un article est présent dans l’URL
    useEffect(() => {
        if (articleParam) {
            // Appelle manuelle de RechercheFS comme si on l'avait tapé
            getTableFicheSuiveuse(articleParam).then((result) => {
                setApiResult(result);
            });
        }
    }, [articleParam]);

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
    const idType = apiResult === null ? null : apiResult?.RESULT?.[0]?.ID_TYPE;

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

            <div className="flex flex-col lg:flex-row gap-4">
                <div className={`w-full lg:w-1/3 ${cardBackground}`}>
                    <CardTitleFS cardName="Détails" />
                    <DetailsObjet objet={selectedObjet} />
                </div>
                <div className={`w-full lg:w-1/3 flex flex-col gap-4`}>
                    <div className={`${cardBackground}`}>
                        <CardTitleFS cardName="COMMENTAIRES" />
                        <div></div>
                    </div>
                    <div className={`${cardBackground}`}>
                        <CardTitleFS cardName="AUTRE" />
                        <div className="p-4"><span className='font-semibold'>ID_TYPE :</span> {idType} </div>
                    </div>
                </div>
                <div className={`w-full lg:w-1/3 ${cardBackground}`}>
                    <CardTitleFS cardName="CONFIG" />
                    <Config config={configData} />
                </div>
            </div>


        </div>
    );
};

export default Ajout;
