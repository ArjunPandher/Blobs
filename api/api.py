from flask import Flask
import requests as req
import json
import numpy as np

app = Flask(__name__)

{
    "type":"FeatureCollection",
    "features":[
      {"type":"Feature", "properties":{"dbh":7},
        "geometry":{"type":"Point","coordinates":[-80.0468,40.43461]}},
      {"type":"Feature","properties":{"dbh":11},
        "geometry":{"type":"Point","coordinates":[-80.03639,40.44505]}},
      {"type":"Feature","properties":{"dbh":7},
        "geometry":{"type":"Point","coordinates":[-80.03393,40.43546]}},
      {"type":"Feature","properties":{"dbh":20},
        "geometry":{"type":"Point","coordinates":[-80.05113,40.43404]}},
      {"type":"Feature","properties":{"dbh":2},
        "geometry":{"type":"Point","coordinates":[-79.93404,40.47953]}},
      {"type":"Feature","properties":{"dbh":-1},
        "geometry":{"type":"Point","coordinates":[-79.88148,40.45954]}},
      {"type":"Feature","properties":{"dbh":10},
        "geometry":{"type":"Point","coordinates":[-79.9201,40.47591]}}
    ]
  }

@app.route('/api', methods=['GET'])
def api():
    returnData = []
    features = []
    states = ["colorado", "new+york", "maine"]
    for state in states:
        response = req.get("https://api.waqi.info/search/?token=491989f2467ee8ad41a1ed72d33635bf9669f1e6&keyword=" + state)
        stateData = response.json()['data']
        for data in stateData:
            if data['aqi'] != '-':
                station = data['station']
                name = station['name'].split(', ')
                coordinates = station['geo']
                place, state, country = name[0], None, None
                if len(name) > 2:
                    state, country = name[1], name[2]
                elif len(name) == 2:
                    country = name[1]
                newData = {'uid': data['uid'], 'aqi': data['aqi'], 'place': place, 'state': state, 'country': country, 'geo': coordinates}
                returnData.append(newData)
                # features geojson
                features.append({"type":"Feature", "properties":{"dbh":data['uid']},"geometry":{"type":"Point","coordinates": [coordinates[1], coordinates[0]]}})
    
    ans = {'status': 'ok', 'data': returnData}
    geojson = {'type': 'FeatureCollection', 'features': features}
    print(geojson)
    return geojson
api()