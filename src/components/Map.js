import React, {useState} from 'react';
import ReactMapGL, {Layer, Source, Marker} from 'react-map-gl';
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
          'heatmap-weight': [
            'interpolate',
            ['linear'],
            ['get', 'mag'],
            0,
            0,
            6,
            1
            ],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            1,
            5,
            3
            ],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
            'interpolate',
            ['linear'],
            ['heatmap-density'],
            0,
            'rgba(33,102,172,0)',
            0.2,
            'rgb(103,169,207)',
            0.4,
            'rgb(209,229,240)',
            0.6,
            'rgb(253,219,199)',
            0.8,
            'rgb(239,138,98)',
            1,
            'rgb(178,24,43)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            2,
            9,
            20
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0
            ]
        }}
      />
      <Layer
        id='points'
        type='circle'
        paint={ {
          // Size circle radius by earthquake magnitude and zoom level
          'circle-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
          16,
          ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
          ],
          // Color circle by earthquake magnitude
          'circle-color': [
          'interpolate',
          ['linear'],
          ['get', 'mag'],
          1,
          'rgba(33,102,172,0)',
          2,
          'rgb(103,169,207)',
          3,
          'rgb(209,229,240)',
          4,
          'rgb(253,219,199)',
          5,
          'rgb(239,138,98)',
          6,
          'rgb(178,24,43)'
          ],
          'circle-stroke-color': 'white',
          'circle-stroke-width': 1,
          // Transition from heatmap to circle layer by zoom level
          'circle-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          0,
          8,
          1
          ]
          }}
      />
    </Source>
      {/* {apiData.data.map(d =>
        (
          <Marker
            key={d.uid}
            latitude={Number(d.station.geo[0])}
            longitude={Number(d.station.geo[1])}
          >
            <img src='../marker.png' height='3%' width='3%' />
          </Marker>
        )
      )} */}
    </ReactMapGL>
  );
};

export default Map;
