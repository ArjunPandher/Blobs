from flask import Flask
import requests as req
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def api():
    states = {}     
    cities = ["colorado", "new+york", "maine"]
    for city in cities:
        thingsWeWant = {}           # [geo, aqi, name]
        response = req.get("https://api.waqi.info/search/?token=491989f2467ee8ad41a1ed72d33635bf9669f1e6&keyword=" + city)
        data = response.json()
        for oneData in data["data"]:
            aqi, geo, name = oneData["aqi"], oneData["station"]["geo"], oneData["station"]["name"]
            tempDict = {}
            tempDict["aqi"], tempDict["geo"], tempDict["name"] = aqi, geo, name
            thingsWeWant[oneData["uid"]] = tempDict
        states[city] = thingsWeWant
    return states
    