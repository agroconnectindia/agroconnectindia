from flask import Flask, render_template, request, redirect
import sqlite3

# app = Flask(__name__)
# DATABASE = 'agroconnect.db'

# def get_db_connection():
#     conn = sqlite3.connect(DATABASE)
#     conn.row_factory = sqlite3.Row
#     return conn

# @app.route('/', methods=['GET', 'POST'])
def milkshow():
    DATABASE = 'agroconnect.db'
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    if request.method == 'POST':
        date = request.form['date']
        quantity = float(request.form['quantity'])
        rate = float(request.form['rate'])
        amount = quantity * rate  # Calculate amount

        # conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Milkdata (Date, Quantity, Rate, Amount) VALUES (?, ?, ?, ?)",
                       (date, quantity, rate, amount))
        conn.commit()
        conn.close()

        return redirect('/milk')  # Redirect to home page after submission

    # Fetch existing records
    # conn = get_db_connection()
    records = conn.execute("SELECT * FROM Milkdata ORDER BY Date DESC").fetchall()
    conn.close()

    return render_template('milk.html', records=records)

# if __name__ == '__main__':
    # app.run(debug=True)
