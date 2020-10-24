from flask import Flask
import requests as req
import json

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    returnData = []
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
    
    ans = {'status': 'ok', 'data': returnData}
    print(ans)
    return ans
api()