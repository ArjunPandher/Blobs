import React, {useState, useEffect} from 'react';

import Map from './components/Map';


const App = () => {
  const [apiData, setApiData] = useState({
    "status": "ok",
    "data": []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api');
      if (!response.ok) throw response;
      const json = await response.json();
      setApiData(json);
    }
    fetchData();
  }, []);

  return (
    <Map apiData={apiData} />
  );
};

export default App;
