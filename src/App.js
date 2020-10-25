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
  const [popData, setPopData] = useState({});

  const fixData = json => ({
    ...json,
    features: Object.values(json.features)
  });

  const fixPop = json => ({
    ...json
  })

  useEffect(() => {
    const db = firebase.database().ref('-MKRxUv8sIFfQTf64Rnu');
    const handleData = snap => {
      if (snap.val()) setApiData(fixData(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  useEffect(() => {
    const db = firebase.database().ref('population/-MKT7yr163uDiPgQFD1O');
    const handleData = snap => {
      if (snap.val()) setPopData(fixPop(snap.val()));
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  return (
    <>
      <MenuDrawer apiData={apiData} />
<<<<<<< HEAD
      <PopUpDialog/>
      <Map apiData={apiData} />
=======
      {/* <PopUpDialog/> */}
      <Map apiData={apiData} popData={popData}/>
>>>>>>> 62024d60b7fb17bcc371565b3e1ac5e80493d629
    </>
  );
};

export default App;
