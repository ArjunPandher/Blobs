import React, {useState} from 'react';
import ReactMapGL, {Source, Layer} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlvaDAzMTYiLCJhIjoiY2tnbjF5enpiMDV3azJ5cWxzcWd5djJ6NCJ9.fN9v1ZMyAVCSIWeITwhg7w';

const geojson = {
  type: 'FeatureCollection',
  features: [{type: 'Feature', properties: {dbh: 0}, geometry: {type: 'Point', coordinates: [40.8069, -73.9619]}}]
};

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.8069488,
    longitude: -73.9618974,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxgl.accessToken}
      mapStyle='mapbox://styles/dannyoh0316/ckgn3lw4x1t0u1amnxp3mu92e'
      // mapStyle='mapbox://styles/mapbox/dark-v10'
      onViewportChange={viewport => setViewport(viewport)}
    >
      <Source id="my-data" type="geojson" data={geojson}>
          <Layer
            id="point"
            type="heatmap"
          />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
