import { useState } from "react";
import RechercheFS from "../components/RechercheFS";

const Infos = () => {
  const [apiResult, setApiResult] = useState(null);

    return (
      <div className="p-4">
        <RechercheFS onResult={setApiResult} />
        {apiResult && (
          <pre className="mt-4 p-4 bg-gray-100 border rounded-md overflow-auto">
            {JSON.stringify(apiResult, null, 2)}
          </pre>
        )}
      </div>
    );
  };
  
  export default Infos;
  