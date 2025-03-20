from flask import Flask, jsonify, request, render_template
from datetime import datetime, timedelta
from modules.database import get_db_connection

def calculate_countdown(target_date):
    """Calculate remaining months and days from today to the target date."""
    today = datetime.today()
    remaining_time = target_date - today
    remaining_days = remaining_time.days
    remaining_months = remaining_days // 30
    remaining_days = remaining_days % 30
    return remaining_months, remaining_days

def next_seed_interval():
    if request.method == 'POST':
        next_seed_date = request.form.get('next_seed_date')
        
        if not next_seed_date:
            return jsonify({"error": "Missing next_seed_date parameter."}), 400
        
        try:
            next_seed_date = datetime.strptime(next_seed_date, '%Y-%m-%d')
        except ValueError:
            return jsonify({"error": "Invalid date format. Use YYYY-MM-DD."}), 400
        
        target_date = next_seed_date + timedelta(days=180)  
        remaining_months, remaining_days = calculate_countdown(target_date)
        
        conn = get_db_connection()
        if conn:
            try:
                cursor = conn.cursor()
                cursor.execute('''INSERT INTO nextseed (date) VALUES (%s)''', (next_seed_date.strftime('%Y-%m-%d'),))
                conn.commit()
                cursor.close()
                conn.close()
            except Exception as e:
                return jsonify({"error": f"Database error: {str(e)}"}), 500
        
        return jsonify({
            "next_seed_date": next_seed_date.strftime('%Y-%m-%d'),
            "remaining_months": remaining_months,
            "remaining_days": remaining_days
        }), 200
    
    # return jsonify({"message": "Use POST method to submit data."}), 405
    return render_template("nextseed.html")
