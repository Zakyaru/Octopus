import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTableFicheSuiveuse } from '../services/api.js';

// Composants custom utilisés pour l'affichage
import CardTitleFS from "../components/CardTitleFS";
import Historique from '../components/Historique';
import DetailsObjet from '../components/DetailsObjet';
import Status from '../components/Status';
import RechercheFS from '../components/RechercheFS';
import Config from '../components/Config';
import Bandeau from '../components/Bandeau.jsx';

const Infos = () => {
  const cardBackground = "bg-gray-100";

  // Stocke le résultat brut de l'appel API
  const [apiResult, setApiResult] = useState(null);

  // Récupère les paramètres de l'URL, notamment le paramètre "article"
  const [searchParams] = useSearchParams();
  const articleParam = searchParams.get('article');

  // Appel API déclenché au chargement ou quand l'article change
  useEffect(() => {
    if (articleParam) {
      getTableFicheSuiveuse(articleParam).then((result) => {
        setApiResult(result);
      });
    }
  }, [articleParam]);

  // Gestion de l'objet sélectionné dans l'historique
  const [selectedObjet, setSelectedObjet] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sélection ou désélection d'un élément de l'historique
  const handleClickHistorique = (objet, index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelectedObjet(null);
    } else {
      setSelectedIndex(index);
      setSelectedObjet(objet);
    }
  };

  // Permet de parser proprement des données JSON stockées en string
  const parseJson = (value) => {
    try {
      return typeof value === 'string' ? JSON.parse(value) : value;
    } catch {
      return "__invalid__";
    }
  };

  // Extraction et parsing des sous-parties du résultat API
  const statusData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.STATUS);
  const historiqueData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.HISTORIQUE);
  const configData = apiResult === null ? null : parseJson(apiResult?.RESULT?.[0]?.CONFIG);
  const idType = apiResult === null ? null : apiResult?.RESULT?.[0]?.ID_TYPE;
  const datamatrix = apiResult === null ? null : apiResult?.RESULT?.[0]?.DATAMATRIX;

  return (
    <div className="p-4 space-y-4">
      {/* 1. Section Recherche + Status */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Composant de recherche par article */}
        <div className="w-full lg:w-lg lg:min-w-lg flex-shrink-0 flex flex-col bg-gray-200">
          <RechercheFS onResult={setApiResult} />
        </div>

        {/* Composant d'affichage du status */}
        <div className={`w-full lg:flex-1 overflow-x-auto shadow ${cardBackground}`}>
          <div className="min-w-fit">
            <CardTitleFS cardName="STATUS" />
            <Status status={statusData} />
          </div>
        </div>
      </div>

      {/* 2. Section Historique des étapes précédentes */}
      <div className={`w-full shadow ${cardBackground}`}>
        <CardTitleFS cardName="HISTORIQUE" />
        <Historique
          historique={historiqueData}
          onClick={handleClickHistorique}
          selectedIndex={selectedIndex}
        />
      </div>

      {/* 3. Section trois colonnes : Détails | Commentaires & Autre | Config */}
      <div className="flex flex-col lg:flex-row lg:h-[250px] gap-4">

        {/* 3.1 - Détails de l'objet sélectionné dans l'historique */}
        <div className={`flex-1 shadow ${cardBackground}`}>
          <div className="flex flex-col h-full">
            <CardTitleFS cardName="Détails" />
            <div className="flex-1 overflow-auto">
              <DetailsObjet objet={selectedObjet} />
            </div>
          </div>
        </div>

        {/* 3.2 - Colonne centrale : Commentaires + ID Type */}
        <div className="flex-1">
          <div className="flex flex-col h-full gap-y-4">

            {/* 3.2.1 - Commentaires */}
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

            {/* 3.2.2 - ID_TYPE brut affiché pour information */}
            <div className={`flex flex-col flex-1 min-h-0 shadow ${cardBackground}`}>
              <CardTitleFS cardName="AUTRE" />
              <div className="flex-1 overflow-auto p-2">
                {idType && (
                  <p>
                    <span className='font-semibold'>ID_TYPE : </span>{idType}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3.3 - Configuration JSON brute affichée via le composant Config */}
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

      {/* 4. Bandeau final avec affichage du datamatrix */}
      <div className={`w-full p-4 shadow border border-blue-500 border-2 ${cardBackground}`}>
        <Bandeau datamatrix={datamatrix} />
      </div>
    </div>
  );
};

export default Infos;
