from flask import Flask, render_template, request
from database import get_db_connection  # Import the MySQL connection function

app = Flask(__name__)

def get_poultry_data(month, year):
    conn = get_db_connection()
    if not conn:
        return None

    try:
        cursor = conn.cursor(dictionary=True)
        
        # Fetch records for the selected month and year
        cursor.execute("""
            SELECT Date, Quantity, Rate, Amount 
            FROM poultryfarm 
            WHERE YEAR(Date) = %s AND MONTH(Date) = %s;
        """, (year, month))
        records = cursor.fetchall()

        # Fetch total quantity, average rate, and total amount
        cursor.execute("""
            SELECT SUM(Quantity) as total_quantity, 
                   AVG(Rate) as average_rate, 
                   SUM(Amount) as total_amount 
            FROM poultryfarm 
            WHERE YEAR(Date) = %s AND MONTH(Date) = %s;
        """, (year, month))
        totals = cursor.fetchone()

        return {
            "records": records,
            "total_quantity": totals['total_quantity'] or 0,
            "average_rate": round(totals['average_rate'] or 0, 2),
            "total_amount": totals['total_amount'] or 0,
            "selected_month": f"{year}-{month:02d}"
        }
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None
    finally:
        cursor.close()
        conn.close()

@app.route('/', methods=['GET', 'POST'])
def index():
    data = None
    if request.method == 'POST':
        month = int(request.form['month'])
        year = int(request.form['year'])
        data = get_poultry_data(month, year)
    return render_template('poultryfetch.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)