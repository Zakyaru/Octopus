import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTableFicheSuiveuse } from '../services/api.js';
import CardTitleFS from "../components/CardTitleFS";
import Historique from '../components/Historique';
import DetailsObjet from '../components/DetailsObjet';
import Status from '../components/Status';
import RechercheFS from '../components/RechercheFS';
import Config from '../components/Config';
import Bandeau from '../components/Bandeau.jsx';

const Infos = () => {
  const cardBackground = "bg-gray-100";

  const [apiResult, setApiResult] = useState(null);
  const [searchParams] = useSearchParams();
  const articleParam = searchParams.get('article');

  useEffect(() => {
    if (articleParam) {
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

  const statusData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.STATUS);
  const historiqueData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.HISTORIQUE);
  const configData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.CONFIG);
  const idType = apiResult === null ? null : apiResult?.RESULT?.[0]?.ID_TYPE;
  const datamatrix = apiResult === null ? null : apiResult?.RESULT?.[0]?.DATAMATRIX;

  return (
    <div className="p-4 space-y-4">
      {/* Recherche + Status */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-lg lg:min-w-lg flex-shrink-0 flex flex-col bg-gray-200">
          <RechercheFS onResult={setApiResult} />
        </div>

        <div className={`w-full lg:flex-1 overflow-x-auto shadow ${cardBackground}`}>
          <div className="min-w-fit">
            <CardTitleFS cardName="STATUS" />
            <Status status={statusData} />
          </div>
        </div>
      </div>

      {/* Historique */}
      <div className={`w-full shadow ${cardBackground}`}>
        <CardTitleFS cardName="HISTORIQUE" />
        <Historique historique={historiqueData} onClick={handleClickHistorique} selectedIndex={selectedIndex} />
      </div>

      {/* Trois colonnes avec hauteur fixe */}
      <div className="flex flex-col lg:flex-row lg:h-[250px] gap-4">

        {/* Section 1 */}
        <div className={`flex-1 shadow ${cardBackground}`}>
          <div className="flex flex-col h-full">
            <CardTitleFS cardName="Détails" />
            <div className="flex-1 overflow-auto">
              <DetailsObjet objet={selectedObjet} />
            </div>
          </div>
        </div>

        {/* Section 2 (avec 2 sous-sections) */}
        <div className="flex-1">
          <div className="flex flex-col h-full gap-y-4">
            {/* Sous-section 2.1 */}
            <div className={`flex flex-col flex-1 min-h-0 shadow ${cardBackground}`}>
              <CardTitleFS cardName="COMMENTAIRES" />
              <div className="flex-1 overflow-auto p-2">
                {apiResult && (
                  <p>
                    Ceci est un exemple de commentaire
                  </p>
                )}

              </div>
            </div>

            {/* Sous-section 2.2 */}
            <div className={`flex flex-col flex-1 min-h-0 shadow ${cardBackground}`}>
              <CardTitleFS cardName="AUTRE" />
              <div className="flex-1 overflow-auto p-2">
                {idType && (
                  <p><span className='font-semibold'>ID_TYPE : </span>{idType}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className={`flex-1 shadow ${cardBackground}`}>
          <div className="flex flex-col h-full">
            <CardTitleFS cardName="CONFIG" />
            <div className="flex-1 overflow-auto">
              <div className="w-max whitespace-nowrap">
                <Config config={configData} />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={`w-full p-4 shadow border border-blue-500 border-2 ${cardBackground}`}>
        <Bandeau datamatrix={datamatrix} />
      </div>
    </div>
  );
};


export default Infos;
