import React, {useState} from 'react';
import ReactMapGL, {Layer, Source} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlvaDAzMTYiLCJhIjoiY2tnbjF5enpiMDV3azJ5cWxzcWd5djJ6NCJ9.fN9v1ZMyAVCSIWeITwhg7w';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.8069488,
    longitude: -73.9618974,
    width: '100vw',
    height: '100vh',
    zoom: 15
  });
  const geojson = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"dbh":7},"geometry":{"type":"Point","coordinates":[-80.0468,40.43461]}},{"type":"Feature","properties":{"dbh":11},"geometry":{"type":"Point","coordinates":[-80.03639,40.44505]}},{"type":"Feature","properties":{"dbh":7},"geometry":{"type":"Point","coordinates":[-80.03393,40.43546]}},{"type":"Feature","properties":{"dbh":20},"geometry":{"type":"Point","coordinates":[-80.05113,40.43404]}},{"type":"Feature","properties":{"dbh":2},"geometry":{"type":"Point","coordinates":[-79.93404,40.47953]}},{"type":"Feature","properties":{"dbh":-1},"geometry":{"type":"Point","coordinates":[-79.88148,40.45954]}},{"type":"Feature","properties":{"dbh":10},"geometry":{"type":"Point","coordinates":[-79.9201,40.47591]}}]}

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxgl.accessToken}
      // mapStyle='mapbox://styles/dannyoh0316/ckgn3lw4x1t0u1amnxp3mu92e'
      mapStyle='mapbox://styles/mapbox/dark-v10'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    <Source id='contours' type='geojson' data={geojson}>
    <Layer
        id='contours'
        type='heatmap'
        paint={{

        }}
      />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
