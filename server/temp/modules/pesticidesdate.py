from flask import Flask, jsonify, request
from datetime import datetime, timedelta
from modules.database import get_db_connection


def get_remaining_days(application_date):
    """Calculates the remaining days, hours, and minutes for pesticide application."""
    try:
        application_date = datetime.strptime(application_date, '%Y-%m-%d')
    except ValueError:
        return {"status": "Invalid format", "remaining_days": 0, "remaining_hours": 0, "remaining_minutes": 0}

    target_date = application_date + timedelta(days=15)
    remaining_time = target_date - datetime.now()

    if remaining_time.total_seconds() < 0:
        return {"status": "Expired", "remaining_days": 0, "remaining_hours": 0, "remaining_minutes": 0}

    return {
        "status": "Valid",
        "remaining_days": remaining_time.days,
        "remaining_hours": remaining_time.seconds // 3600,
        "remaining_minutes": (remaining_time.seconds % 3600) // 60
    }


def pest():
    """Handles pesticide application date submission and JSON response."""
    
    if request.method == 'POST':
        application_date = request.form.get('application_date')

        if not application_date:
            return jsonify({"error": "Missing application_date parameter."}), 400

        countdown = get_remaining_days(application_date)

        conn = get_db_connection()
        if conn:
            try:
                cursor = conn.cursor()
                cursor.execute("SELECT COUNT(*) FROM pesticides")
                count = cursor.fetchone()[0]

                if count > 0:
                    cursor.execute("UPDATE pesticides SET application_date = %s", (application_date,))
                else:
                    cursor.execute("INSERT INTO pesticides (application_date) VALUES (%s)", (application_date,))
                
                conn.commit()
            except Exception as e:
                return jsonify({"error": f"Database error: {str(e)}"}), 500
            finally:
                cursor.close()
                conn.close()
        else:
            return jsonify({"error": "Failed to connect to the database."}), 500

        return jsonify({
            "application_date": application_date,
            "remaining_days": countdown["remaining_days"],
            "remaining_hours": countdown["remaining_hours"],
            "remaining_minutes": countdown["remaining_minutes"],
            "status": countdown["status"]
        }), 200

    # Fetch latest stored record for GET request
    conn = get_db_connection()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute("SELECT application_date FROM pesticides ORDER BY application_date DESC LIMIT 1")
            record = cursor.fetchone()
        except Exception as e:
            return jsonify({"error": f"Database error: {str(e)}"}), 500
        finally:
            cursor.close()
            conn.close()
    else:
        return jsonify({"error": "Failed to connect to the database."}), 500

    if record:
        countdown = get_remaining_days(record[0])
        return jsonify({
            "latest_application_date": record[0],
            "remaining_days": countdown["remaining_days"],
            "remaining_hours": countdown["remaining_hours"],
            "remaining_minutes": countdown["remaining_minutes"],
            "status": countdown["status"]
        }), 200

    return jsonify({"message": "No pesticide records found."}), 404


