import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxgl.accessToken}
    >
      markers here
    </ReactMapGL>
  );
}

export default App;
