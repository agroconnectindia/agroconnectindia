from flask import Flask
from modules.weather import weatherinfo

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!<br><a href="/weather">Go to Weather Module</a>'

# @app.route('/weather')
# def weather():
#     return 'Weather Module'
@app.route('/weather')
def weather():
        return weatherinfo()

if __name__ == '__main__':
    app.run(debug=True)