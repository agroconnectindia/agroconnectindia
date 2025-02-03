from flask import Flask, render_template
# from registrationdata import showregdata
from registrationtest.zzregister import zregister
from milk import milkshow
from poultryfarm import poultryshow
import sqlite3  

dbname = 'agroconnect.db'


app = Flask(__name__)

@app.route('/') 
def home():
    return render_template('index.html')
@app.route('/poultryfarm')
def poultryfarm():
    return render_template('Poultryfarm.html')
@app.route("/milk", methods=['GET', 'POST'])
def milk():
    return milkshow()
@app.route('/poultry', methods=['GET', 'POST'])
def poultry():
    return poultryshow()


@app.route('/zzregister')
def zzreturn():
    return render_template("login.html")

@app.route('/zzregistersuccess', methods=['POST'])
def register():
    return zregister()


if __name__ == '__main__':
    app.run(debug=True)