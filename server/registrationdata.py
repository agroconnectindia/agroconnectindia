from flask import render_template
from app import dbname
import sqlite3
def showregdata():
    conn = sqlite3.connect({dbname})
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Login")
    data = cursor.fetchall()  # Fetch all records
    conn.close()
    return render_template("show.html", data=data)