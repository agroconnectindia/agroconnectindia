from flask import Flask, render_template, request, redirect
import sqlite3

def poultryshow():
    DATABASE = 'agroconnect.db'
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    if request.method == 'POST':
        date = request.form['date']
        quantity = float(request.form['quantity'])
        rate = float(request.form['rate'])
        amount = quantity * rate  # Calculate amount

        
        cursor = conn.cursor()
        cursor.execute("INSERT INTO poultryfarm (Date, Quantity, Rate, Amount) VALUES (?, ?, ?, ?)",
                       (date, quantity, rate, amount))
        conn.commit()
        conn.close()

        return redirect('/poultry')  # Redirect to home page after submission

    # Fetch existing records
    records = conn.execute("SELECT * FROM poultryfarm ORDER BY Date DESC").fetchall()
    conn.close()

    return render_template('poultryfarm.html', records=records)