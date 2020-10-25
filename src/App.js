import React, {useState, useEffect} from 'react';
import Map from './components/Map';
import MenuDrawer from './components/MenuDrawer';
import {firebase} from './utils/firebase.js';
import PopUpDialog from './components/PopUpDialog';


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
    const db = firebase.database().ref('-MKRxUv8sIFfQTf64Rnu');
    const handleData = snap => {
      if (snap.val()) setApiData(fixData(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <>
      <MenuDrawer/>
      {/* <PopUpDialog/> */}
      <Map apiData={apiData} />
    </>
  );
};

export default App;
