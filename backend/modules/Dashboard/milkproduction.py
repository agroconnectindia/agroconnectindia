from flask import Flask, render_template, request, redirect
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))
from database import db_connection

def milkshow():
    conn = db_connection()
    cursor = conn.cursor(dictionary=True)  # Enables row retrieval as dictionaries

    if request.method == 'POST':
        date = request.form['date']
        quantity = float(request.form['quantity'])
        rate = float(request.form['rate'])
        amount = quantity * rate  # Calculate amount

        # Insert data into MySQL
        cursor.execute("INSERT INTO Milkdata (Date, Quantity, Rate, Amount) VALUES (%s, %s, %s, %s)",
                       (date, quantity, rate, amount))
        conn.commit()

        return redirect('/milkproduction')  # Redirect to home page after submission

    # Fetch existing records from MySQL
    cursor.execute("SELECT * FROM Milkdata ORDER BY Date DESC")
    records = cursor.fetchall()

    conn.close()
    
    return render_template('milkproduction.html', records=records)