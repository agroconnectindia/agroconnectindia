from pprint import pp
from flask import Flask, session
from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS  # type: ignore
from modules.weather import get_weather_data
from modules.milk import get_milk_data, TotalMilkPerWeek
from modules.egg import get_egg_data ,TotalEggsPerWeek
from modules.registration import register
from modules.nextseed import next_seed_interval
from modules.database import get_db_connection
from modules.cropinfo import cropinfos
from modules.urea import urea
from modules.pesticidesdate import pest 

app = Flask(__name__)
CORS(app)
app.secret_key = "samarth@2006"

@app.route('/')
def backend():
    return render_template('index.html')

@app.route('/weather')
def weather():
    return get_weather_data()

@app.route('/milk', methods=['GET', 'POST'])
def milk():
    return get_milk_data()

@app.route('/TotalMilkPerWeek', methods=['GET', 'POST'])
def TotalMilkPerWeeks():
    return TotalMilkPerWeek()

@app.route('/egg', methods=['GET', 'POST'])
def egg():
    return get_egg_data()

@app.route('/TotalEggsPerWeek', methods=['GET', 'POST'])
def TotalEggsPerWeeks():
    return TotalEggsPerWeek()

@app.route('/register', methods=['GET', 'POST'])
def user_register():
    return register()

@app.route('/success', methods=['GET', 'POST'])
def success():
    return render_template('success.html')

@app.route('/nextseed', methods=['GET', 'POST'])
def nextseed():
    return next_seed_interval()

@app.route('/cropinfo', methods=['GET',])
def cropinfo():
    return cropinfos()

@app.route('/urea', methods=['GET', 'POST'])
def ureas():
    return urea()

@app.route('/pesticides', methods=['GET', 'POST'])
def indexs():
    return pest()


if __name__ == '__main__':
    app.run(debug=True)