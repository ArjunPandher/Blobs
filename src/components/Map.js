import React, {useState} from 'react';
import ReactMapGL, {Layer, Source, Marker, Popup} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import processJSON from '../jsonprocesser'
import processPopulation from '../populationprocessor'


mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlvaDAzMTYiLCJhIjoiY2tnbjF5enpiMDV3azJ5cWxzcWd5djJ6NCJ9.fN9v1ZMyAVCSIWeITwhg7w';

const Map = ({apiData, popData, aqiRating}) => {
  const [viewport, setViewport] = useState({
    latitude: 40.8069488,
    longitude: -73.9618974,
    width: '100vw',
    height: '100vh',
    // zoom: 15
    zoom: 5
  });
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedApiData, setSelectedApiData] = useState(apiData);
  console.log(selectedApiData)

  const geojson = processJSON(selectedApiData);

  const updateApiData = () => {
    const ret = [];
    const features = apiData.features;
    if (aqiRating.good) {
      ret.push(features.filter(feature => Number(feature.properties.aqi) <= 50));
    }
    if (aqiRating.moderate) {
      ret.push(features.filter(feature => Number(feature.properties.aqi) <= 100));
    }
    if (aqiRating.bad) {
      ret.push(features.filter(feature => Number(feature.properties.aqi) <= 150));
    }
    if (aqiRating.unhealthy) {
      ret.push(features.filter(feature => Number(feature.properties.aqi) > 150));
    }
    setSelectedApiData({"type": "FeatureCollection", "features": ret});
  };

  const popjson = processPopulation(popData)

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxgl.accessToken}
      mapStyle='mapbox://styles/dannyoh0316/ckgn3lw4x1t0u1amnxp3mu92e'
      // mapStyle='mapbox://styles/mapbox/dark-v10'
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    <Source id='contours0' type='geojson' data={geojson[0]}>
      <Layer
        id='contours0'
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
            'rgb(173,216,230)',
            0.4,
            'rgb(159,198,222)',
            0.6,
            'rgb(144,180,215)',
            0.8,
            'rgb(130,162,207)',
            1,
            'rgb(115,144,200)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours1' type='geojson' data={geojson[1]}>
      <Layer
        id='contours1'
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
            'rgb(173,216,230)',
            0.4,
            'rgb(144,180,215)',
            0.6,
            'rgb(115,144,200)',
            0.8,
            'rgb(87,108,184)',
            1,
            'rgb(58,72,169)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours2' type='geojson' data={geojson[2]}>
      <Layer
        id='contours2'
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
            'rgb(173,216,230)',
            0.4,
            'rgb(130,162,207)',
            0.6,
            'rgb(87,108,184)',
            0.8,
            'rgb(58,72,169)',
            1,
            'rgb(29,36,154)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours3' type='geojson' data={geojson[3]}>
      <Layer
        id='contours3'
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
            'rgb(173,216,230)',
            0.4,
            'rgb(130,162,207)',
            0.6,
            'rgb(87,108,184)',
            0.8,
            'rgb(43,54,162)',
            1,
            'rgb(0,0,139)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours4' type='geojson' data={popjson[0]}>
      <Layer
        id='contours4'
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
            'rgb(255,255,237)',
            0.4,
            'rgb(255,255,197)',
            0.6,
            'rgb(255,255,158)',
            0.8,
            'rgb(255,255,139)',
            1,
            'rgb(255,255,119)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours5' type='geojson' data={popjson[1]}>
      <Layer
        id='contours5'
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
            'rgb(255,255,237)',
            0.4,
            'rgb(255,255,197)',
            0.6,
            'rgb(255,255,119)',
            0.8,
            'rgb(255,255,79)',
            1,
            'rgb(255,255,0)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours6' type='geojson' data={popjson[2]}>
      <Layer
        id='contours6'
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
            'rgb(255,255,237)',
            0.4,
            'rgb(255,255,119)',
            0.6,
            'rgb(255,255,0)',
            0.8,
            'rgb(255,202,0)',
            1,
            'rgb(255,187,0)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    <Source id='contours7' type='geojson' data={popjson[3]}>
      <Layer
        id='contours7'
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
            'rgb(255,255,237)',
            0.4,
            'rgb(255,255,0)',
            0.6,
            'rgb(255,187,0)',
            0.8,
            'rgb(255,150,0)',
            1,
            'rgb(255,110,0)'
            ],
            // Adjust the heatmap radius by zoom level
            'heatmap-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            20,
            20,
            75
            ],
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            7,
            1,
            9,
            0.45
            ]
        }}
      />
    </Source>
    
      {apiData.features.map(dataPoint =>
        (
          <Marker
            key={dataPoint.uid}
            latitude={dataPoint.geometry.coordinates[1]}
            longitude={dataPoint.geometry.coordinates[0]}
          >
            <img
              src='../marker.png'
              alt=''
              height='3%'
              width='3%'
              onClick={() => setSelectedPlace(dataPoint)} />
          </Marker>
        )
      )}
      {selectedPlace ? (
        <Popup
          latitude={selectedPlace.geometry.coordinates[1]}
          longitude={selectedPlace.geometry.coordinates[0]}
          onClose={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.place}{", "}{selectedPlace.state}</h2>
            <p>Latitude: {selectedPlace.geometry.coordinates[1]}</p>
            <p>Longitude: {selectedPlace.geometry.coordinates[0]}</p>
            <p>Air Quality Index: {selectedPlace.properties.aqi}</p>
            {/* <p>Population: {popData.{selectedPlace.place}}</p> */}
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default Map;
