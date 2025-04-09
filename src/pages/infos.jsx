import { useState } from "react";
import RechercheFS from "../components/RechercheFS";
import CardTitleFS from "../components/CardTitleFS";
import DetailsObjet from "../components/DetailsObjet";
import Config from "../components/Config";

const Infos = () => {
  const [apiResult, setApiResult] = useState(null);

  return (
    <>
      <div className="p-4">
        <RechercheFS onResult={setApiResult} />
        {apiResult && (
          <pre className="mt-4 p-4 bg-gray-100 border rounded-md overflow-auto">
            {JSON.stringify(apiResult, null, 2)}
          </pre>
        )}
      </div>


      <div className="flex flex-col lg:flex-row h-[300px] gap-2">
      
      {/* Section 1 */}
      <div className="flex-1 border rounded shadow">
        <div className="flex flex-col h-full">
          <CardTitleFS cardName="Détails de l'objet" />
          <div className="flex-1 overflow-auto">
            <DetailsObjet objet={null} />
          </div>
        </div>
      </div>

      {/* Section 2 (avec 2 sous-sections) */}
      <div className="flex-1 border rounded shadow">
        <div className="flex flex-col h-full divide-y divide-gray-300">
          {/* Sous-section 2.1 */}
          <div className="flex flex-col flex-1">
            <CardTitleFS cardName="Texte 2.1" />
            <div className="flex-1 overflow-auto p-2">
              <p>
                Voici un texte de test pour la section 2.1. Tu peux scroller ici si besoin.
              </p>
            </div>
          </div>

          {/* Sous-section 2.2 */}
          <div className="flex flex-col flex-1">
            <CardTitleFS cardName="Texte 2.2" />
            <div className="flex-1 overflow-auto p-2">
              <p>
                Encore un texte, cette fois dans la section 2.2. Le scroll reste actif uniquement ici.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex-1 border rounded shadow">
        <div className="flex flex-col h-full">
          <CardTitleFS cardName="Configuration" />
          <div className="flex-1 overflow-auto">
            <Config config={null} />
          </div>
        </div>
      </div>
    </div>
    </>


  );
};

export default Infos;
