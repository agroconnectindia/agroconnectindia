from flask import render_template, session, jsonify
from modules.database import get_db_connection

def cropinfos():
    db = get_db_connection()
    cursor = db.cursor()

   
    crop_name = session.get('currentcrop')

    if not crop_name:
        return jsonify({"error": "No crop found in session! Please register first."}), 400

    cursor.execute("SELECT * FROM crops WHERE Name = %s", (crop_name,))
    crop_data = cursor.fetchone()

    if not crop_data:
        return jsonify({"error": "Crop information not found."}), 404

  
    crop = {
        'Name': crop_data[1],
        'Water': crop_data[2],
        'Sunlight': crop_data[3],
    }
    return render_template('crop.html', crop=crop)
