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
  const [viewport, setViewport] = useState({
    latitude: 40.8069488,
    longitude: -73.9618974,
    width: '100vw',
    height: '100vh',
    // zoom: 15
    zoom: 5
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

  return (
    <>
      <MenuDrawer apiData={apiData} aqiRating={aqiRating} setAqiRating={setAqiRating} setViewport={setViewport} />
      <PopUpDialog />
      <Map apiData={apiData} popData={popData} aqiRating={aqiRating} viewport={viewport} setViewport={setViewport} />
    </>
  );
};

export default App;
