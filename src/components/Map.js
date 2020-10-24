import React, {useState} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlvaDAzMTYiLCJhIjoiY2tnbjF5enpiMDV3azJ5cWxzcWd5djJ6NCJ9.fN9v1ZMyAVCSIWeITwhg7w';

const Map = ({apiData}) => {
  const [viewport, setViewport] = useState({
    latitude: 40.8069488,
    longitude: -73.9618974,
    width: '100vw',
    height: '100vh',
    // zoom: 15
    zoom: 1
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxgl.accessToken}
      // mapStyle='mapbox://styles/dannyoh0316/ckgn3lw4x1t0u1amnxp3mu92e'
      mapStyle='mapbox://styles/mapbox/dark-v10'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {apiData.data.map(d =>
        (
          <Marker
            key={d.uid}
            latitude={Number(d.station.geo[0])}
            longitude={Number(d.station.geo[1])}
          >
            <img src='../marker.png' height='3%' width='3%' />
          </Marker>
        )
      )}
    </ReactMapGL>
  );
};

export default Map;
