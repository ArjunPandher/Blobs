from flask import Flask
import request as req


app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    # given "cities"
    # for city in cities
        # response = req.get("https://api.waqi.info/search/?token=491989f2467ee8ad41a1ed72d33635bf9669f1e6&keyword=" + city)
        # json.dump(response.json(), outFile)

    return {
        'userId': 1, 
        'title': 'Flask React Application', 
        'completed': False
    }