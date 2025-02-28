# from flask import Flask, render_template, request, redirect
# import sqlite3

# app = Flask(__name__)

# # Function to connect to SQLite database
# def create_connection():
#     return sqlite3.connect("agroconnect.db")

# # Create table if it doesn't exist
# def create_table():
#     conn = create_connection()
#     cursor = conn.cursor()

#     conn.commit()
#     conn.close()

# # Route for login page
# @app.route('/')
# def index():
#     return render_template('login.html')

# # Route to handle form submission
# @app.route('/register', methods=['POST'])
# def register():
#     if request.method == 'POST':
#         phonenumber = request.form['phonenumber']
#         email = request.form['email']

#         conn = create_connection()
#         cursor = conn.cursor()

#         try:
#             cursor.execute("INSERT INTO login (phonenumber, email) VALUES (?, ?)", (phonenumber, email))
#             conn.commit()
#             message = "Registration Successful!"
#         except sqlite3.IntegrityError:
#             message = "Error: Phone number or Email already exists!"
#         finally:
#             conn.close()

#         return message  # Display message on screen

# # Initialize table
# create_table()

# if __name__ == '__main__':
#     app.run(debug=True)

# app.py

from flask import Flask, render_template, request
from database import get_db_connection  # Import the MySQL connection function
import mysql.connector  # Import MySQL connector

app = Flask(__name__)

# Function to create the table in MySQL
def create_table():
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor()
        # Create the table if it doesn't exist
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS login (
                id INT AUTO_INCREMENT PRIMARY KEY,
                phonenumber VARCHAR(15) NOT NULL,
                email VARCHAR(100) NOT NULL
            )
        """)
        conn.commit()
        conn.close()
        print("Table created successfully!")
    else:
        print("Failed to create table.")

# Route for login page
@app.route('/login')
def index():
    return render_template('login.html')

# Route to handle form submission
@app.route('/login', methods=['POST'])
def register():
    if request.method == 'POST':
        phonenumber = request.form['phonenumber']
        email = request.form['email']

        conn = get_db_connection()
        if conn:
            cursor = conn.cursor()

            try:
                # Insert data into the MySQL table
                cursor.execute("INSERT INTO login (phonenumber, email) VALUES (%s, %s)", (phonenumber, email))
                conn.commit()
                message = "Registration Successful!"
            except mysql.connector.IntegrityError:
                message = "Error: Phone number or Email already exists!"
            except Exception as e:
                message = f"An error occurred: {e}"
            finally:
                conn.close()
        else:
            message = "Failed to connect to the database."

        return message  # Display message on screen

# Initialize table
create_table()

if __name__ == '__main__':
    app.run(debug=True)