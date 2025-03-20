from flask import Flask, render_template, request, jsonify
from datetime import datetime, timedelta
from modules.database import get_db_connection  

# app = Flask(__name__)

def get_remaining_days(application_date):
    """Calculates remaining days and hours for urea application."""
    try:
        application_date = datetime.strptime(application_date, '%Y-%m-%d')
        target_date = application_date + timedelta(days=15)
        remaining_time = target_date - datetime.now()

        if remaining_time.days < 0:
            return "Urea period expired"
        
        return remaining_time.days, remaining_time.seconds // 3600
    except Exception as e:
        return f"Error calculating remaining days: {e}"

# @app.route('/urea', methods=['GET', 'POST'])
def urea():
    """Handles urea application date entry, saves it, and returns JSON output."""
    
    if request.method == 'POST':
        application_date = request.form.get('application_date')

        if not application_date:
            return jsonify({"error": "Date is required"}), 400

        try:
            application_date_dt = datetime.strptime(application_date, '%Y-%m-%d')
        except ValueError:
            return jsonify({"error": "Invalid date format. Use YYYY-MM-DD."}), 400

        result = get_remaining_days(application_date)

        # Database Insertion
        conn = get_db_connection()
        if not conn:
            return jsonify({"error": "Could not connect to the database."}), 500

        try:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO urea (application_date) VALUES (%s)", (application_date,))
            conn.commit()
        except Exception as e:
            return jsonify({"error": f"Database Error: {e}"}), 500
        finally:
            cursor.close()
            conn.close()

        # Return JSON response
        if isinstance(result, str):
            return jsonify({
                "application_date": application_date,
                "message": result
            }), 200
        else:
            days, hours = result
            return jsonify({
                "application_date": application_date,
                "remaining_days": days,
                "remaining_hours": hours
            }), 200

    # For GET requests, render the HTML form
    return render_template('urea.html')

# if __name__ == '__main__':
#     app.run(debug=True)
