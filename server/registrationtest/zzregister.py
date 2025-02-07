from flask import Flask, render_template, request, redirect
import sqlite3
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

# Route to handle form submission
def zregister():
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

