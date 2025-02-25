from flask import Flask, render_template, request, redirect
from datetime import datetime, timedelta
from database import get_db_connection  # Import the MySQL connection function

app = Flask(__name__)

def get_remaining_days(application_date):
    application_date = datetime.strptime(application_date, '%Y-%m-%d')
    target_date = application_date + timedelta(days=15)
    remaining_time = target_date - datetime.now()
    
    if remaining_time.days < 0:
        return "Urea period expired"
    
    return remaining_time.days, remaining_time.seconds // 3600  # Returns days and hours

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        application_date = request.form['application_date']
        conn = get_db_connection()
        if not conn:
            return "Error: Could not connect to the database."

        try:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO urea (application_date) VALUES (%s)", (application_date,))
            conn.commit()
        except Exception as e:
            return f"Error: {e}"
        finally:
            cursor.close()
            conn.close()
        
        return redirect('/')
    
    # Fetch all records to display remaining days
    conn = get_db_connection()
    if not conn:
        return "Error: Could not connect to the database."

    try:
        cursor = conn.cursor()
        cursor.execute("SELECT application_date FROM urea")
        records = cursor.fetchall()
    except Exception as e:
        return f"Error: {e}"
    finally:
        cursor.close()
        conn.close()

    remaining_intervals = []
    
    for record in records:
        days, hours = get_remaining_days(record[0])
        remaining_intervals.append((record[0], days, hours))
    
    return render_template('urea.html', intervals=remaining_intervals)

if __name__ == '__main__':
    app.run(debug=True)