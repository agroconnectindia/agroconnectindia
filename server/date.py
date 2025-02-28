from flask import Flask, render_template, request, redirect
from datetime import datetime, timedelta
from database import get_db_connection  # Import the MySQL connection function


app = Flask(__name__)

def get_remaining_days(application_date):
    """
    Calculates the remaining days and hours for pesticide application.
    """
    application_date = datetime.strptime(application_date, '%Y-%m-%d')
    target_date = application_date + timedelta(days=15)
    remaining_time = target_date - datetime.now()
    
    if remaining_time.days < 0:
        return "Pesticide period expired", 0  # Return a tuple for consistency
    
    return remaining_time.days, remaining_time.seconds // 3600  # Returns days and hours

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        application_date = request.form['application_date']
        
        # Validate the date format
        try:
            datetime.strptime(application_date, '%Y-%m-%d')
        except ValueError:
            return "Invalid date format. Please use YYYY-MM-DD."

        # Get a database connection
        conn = get_db_connection()
        if conn:
            try:
                cursor = conn.cursor()
                # Insert data into the pesticides table
                cursor.execute("INSERT INTO pesticides (application_date) VALUES (%s)", (application_date,))
                conn.commit()
                cursor.close()
                conn.close()
            except Exception as e:
                return f"Database error: {e}"
        else:
            return "Failed to connect to the database."
        
        return redirect('/')
    
    # Fetch all records to display remaining days
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute("SELECT application_date FROM pesticides")
            records = cursor.fetchall()
            cursor.close()
            conn.close()
        except Exception as e:
            return f"Database error: {e}"
    else:
        return "Failed to connect to the database."

    remaining_intervals = []
    
    for record in records:
        result = get_remaining_days(record[0])
        if result == "Pesticide period expired":
            remaining_intervals.append((record[0], "Expired", 0))
        else:
            days, hours = result
            remaining_intervals.append((record[0], days, hours))
    
    return render_template('pesticides.html', intervals=remaining_intervals)

if __name__ == '__main__':
    app.run(debug=True)