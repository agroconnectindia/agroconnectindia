from flask import Flask, render_template, request, redirect
from database import get_db_connection

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def milkshow():
    conn = get_db_connection()
    if not conn:
        return "Error: Could not connect to the database."

    if request.method == 'POST':
        date = request.form['date']
        quantity = float(request.form['quantity'])
        rate = float(request.form['rate'])
        amount = quantity * rate

        try:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO milkdata (Date, Quantity, Rate, Amount) VALUES (%s, %s, %s, %s)",
                           (date, quantity, rate, amount))
            conn.commit()
            return redirect('/')
        except Exception as e:
            return f"Error: {e}"
        finally:
            cursor.close()
            conn.close()

    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM milkdata ORDER BY Date DESC")
        records = cursor.fetchall()
    except Exception as e:
        return f"Error: {e}"
    finally:
        cursor.close()
        conn.close()

    return render_template('milk.html', records=records)

if __name__ == '__main__':
    app.run(debug=True)