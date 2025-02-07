from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# Function to connect to SQLite database
def create_connection():
    return sqlite3.connect("agroconnect.db")

# Create table if it doesn't exist
def create_table():
    conn = create_connection()
    cursor = conn.cursor()

    conn.commit()
    conn.close()

# Route for login page
@app.route('/')
def index():
    return render_template('login.html')

# Route to handle form submission
@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        phonenumber = request.form['phonenumber']
        email = request.form['email']

        conn = create_connection()
        cursor = conn.cursor()

        try:
            cursor.execute("INSERT INTO login (phonenumber, email) VALUES (?, ?)", (phonenumber, email))
            conn.commit()
            message = "Registration Successful!"
        except sqlite3.IntegrityError:
            message = "Error: Phone number or Email already exists!"
        finally:
            conn.close()

        return message  # Display message on screen

# Initialize table
create_table()

if __name__ == '__main__':
    app.run(debug=True)
