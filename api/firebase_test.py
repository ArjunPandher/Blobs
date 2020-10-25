from flask import Flask
import requests as req
import json
import numpy as np
from firebase import firebase

firebase = firebase.FirebaseApplication("https://divhacks2020.firebaseio.com/", None)

def getMapData():
  features = []
  states = ['colorado', 'new+york', 'maine']

  for state in states:
      response = req.get('https://api.waqi.info/search/?token=491989f2467ee8ad41a1ed72d33635bf9669f1e6&keyword=' + state)
      stateData = response.json()['data']
      for data in stateData:
        if data['aqi'] != '-':
          uid = data['uid']
          station = data['station']
          name, coordinates = station['name'].split(', '), station['geo']
          place, state, country = name[0], None, None
          if len(name) > 2:
            state, country = name[1], name[2]
          elif len(name) == 2:
            country = name[1]
          features.append(
            {
              'type': 'Feature',
              'properties': {
              'dbh': uid,
              'aqi': data['aqi']},
              'place': place,
              'state': state,
              'country': country,
              'geometry': {'type': 'Point', 'coordinates': [coordinates[1], coordinates[0]]}
            }
          )
  geojson = {'type': 'FeatureCollection', 'features': features}
  result = firebase.post('/', geojson)

def getPopData():
    state = {}
    response = req.get("https://api.census.gov/data/2019/pep/population?get=POP,NAME&for=state:*")
    firstTime = 0
    for data in response.json():
        if firstTime != 0:
            state[data[1]] = data[0]
        else: 
            firstTime = 1
    # print(state)  # prints out the state dictionary {state: population}
    # firebase.post('/', geojson)  # ??? 


getMapData()
getPopData()