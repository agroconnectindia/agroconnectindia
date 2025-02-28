from flask import Flask, render_template, request, redirect
from database import get_db_connection  # Import MySQL connection function

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def poultryfarmshow():
    conn = get_db_connection()
    if not conn:
        return "Error: Could not connect to the database."

    if request.method == 'POST':
        date = request.form.get('date')
        quantity = request.form.get('quantity', type=float)
        rate = request.form.get('rate', type=float)
        amount = quantity * rate  # Calculate amount

        try:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO poultryfarm (Date, Quantity, Rate, Amount) VALUES (%s, %s, %s, %s)",
                           (date, quantity, rate, amount))
            conn.commit()
            return redirect('/')
        except Exception as e:
            print(f"Database Insert Error: {e}")
            return f"Error: {e}"
        finally:
            cursor.close()

    # Fetch existing records
    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM poultryfarm ORDER BY Date DESC")
        records = cursor.fetchall()
    except Exception as e:
        print(f"Database Fetch Error: {e}")
        return f"Error: {e}"
    finally:
        cursor.close()
        conn.close()

    return render_template('poultry.html', records=records)

if __name__ == '__main__':
    app.run(debug=True)
