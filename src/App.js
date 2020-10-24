import React, {useState, useEffect} from 'react';

import IntroModal from './components/IntroModal';
import Map from './components/Map';
import {firebase} from './utils/firebase.js';


const App = () => {
  const [apiData, setApiData] = useState(
    {
      'type': 'FeatureCollection',
      'features': []
    }
  );

  const fixData = json => ({
    ...json,
    features: Object.values(json.features)
  });

  useEffect(() => {
    const db = firebase.database().ref('-MKRjef9K-rZ_CdKPG0l');
    const handleData = snap => {
      if (snap.val()) setApiData(fixData(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <>
      <IntroModal />
      <Map apiData={apiData} />
    </>
  );
};

export default App;
