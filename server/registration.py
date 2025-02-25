# app.py
from flask import Flask, render_template, request, redirect
from database import get_db_connection  # Import the function from database.py

app = Flask(__name__)

# Function to insert user data into the database
def insert_user(name, email, phoneno, city, state, language, soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency):
    conn = get_db_connection()  # Use the imported function
    if not conn:
        return "Error: Could not connect to the database."

    try:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO Userinfo (Name, Email, Phoneno, City, State, Language, Soiltype, Currentcrop, Harvesttime, Fertillizerfrequency, Ureafrequency)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        ''', (name, email, phoneno, city, state, language, soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency))
        conn.commit()
    except Exception as e:
        return f"Error: {e}"
    finally:
        cursor.close()
        conn.close()

@app.route('/')
def index():
    return render_template('register.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phoneno = request.form['phoneno']
        city = request.form['city']
        state = request.form['state']
        language = request.form['language']
        soiltype = request.form['soiltype']
        currentcrop = request.form['currentcrop']
        harvesttime = request.form['harvesttime']
        fertilizerfrequency = request.form['fertilizerfrequency']
        ureafrequency = request.form['ureafrequency']

        # Insert data into database
        insert_user(name, email, phoneno, city, state, language, soiltype, currentcrop, harvesttime, fertilizerfrequency, ureafrequency)

        return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)