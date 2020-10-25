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
  const [aqiRating, setAqiRating] = useState({
    unhealthy: true,
    bad: true,
    moderate: true,
    good: true,
  });

  const fixData = json => ({
    ...json,
    features: Object.values(json.features)
  });

  const fixPop = json => ({
    ...json
  })

  useEffect(() => {
    const db = firebase.database().ref('-MKTO7PK-CGXKVZ5cMG0');
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


  console.log(apiData);
  return (
    <>
      <MenuDrawer apiData={apiData} aqiRating={aqiRating} setAqiRating={setAqiRating} />
      <PopUpDialog />
      <Map apiData={apiData} popData={popData} aqiRating={aqiRating} />
    </>
  );
};

export default App;
