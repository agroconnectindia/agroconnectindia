
from flask import render_template, request, jsonify, session
from modules.database import get_db_connection


def insert_user(name, email,  city, state, soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency):
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Database connection failed!"}), 500

    try:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO User (Name, Email, City, State,Gender, Soiltype, Currentcrop, Harvesttime, Fertilizerfrequency, Ureafrequency,)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (name, email, city, state,  soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency))
        conn.commit()

        session['currentcrop'] = currentcrop

        return jsonify({"message": "Registration successful!",}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        city = request.form['city']
        state = request.form['state']
        soiltype = request.form['soiltype']
        currentcrop = request.form['currentcrop']
        harvesttime = request.form['harvesttime']
        fertilizerfrequency = request.form['fertilizerfrequency']
        ureafrequency = request.form['ureafrequency']

        return insert_user(name, email,  city, state,  soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency)

    return render_template('register.html')

