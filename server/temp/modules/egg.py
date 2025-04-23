

from flask import jsonify, request, render_template, redirect
from modules.database import get_db_connection 

def get_egg_data():
    conn = get_db_connection()
    if not conn:
        return jsonify({"error": "Could not connect to the database."}), 500

    if request.method == 'POST':
        date = request.form.get('date')
        quantity = request.form.get('quantity', type=float)
        rate = request.form.get('rate', type=float)
        
        if date is None or quantity is None or rate is None:
            return jsonify({"error": "Missing required fields."}), 400

        amount = quantity * rate  

        try:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO eggdata (Date, Quantity, Rate, Amount) VALUES (%s, %s, %s, %s)",
                           (date, quantity, rate, amount))
            conn.commit()
            return jsonify({"message": "Record added successfully."}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500
        finally:
            cursor.close()
            conn.close()

    try:
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM eggdata ORDER BY Date DESC")
        records = cursor.fetchall()
    except Exception as e:
        print(f"Database Fetch Error: {e}")
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

    # return jsonify({"records": records}), 200
    return render_template('egg.html', records=records)
   



def TotalEggsPerWeek():
    conn=get_db_connection()  
    cursor = conn.cursor(dictionary=True)
    query1="SELECT SUM(Quantity) AS total_eggs_this_week FROM eggdata WHERE YEARWEEK(Date, 1) = YEARWEEK(CURDATE(), 1);"
    query2="SELECT SUM(Amount) AS total_amount_this_week FROM eggdata WHERE YEARWEEK(Date, 1) = YEARWEEK(CURDATE(), 1);"
    cursor.execute(query1)
    result1 = cursor.fetchone()  # Fetch single row
        
    cursor.execute(query2)
    result2 = cursor.fetchone()  # Fetch single row

        # Closing cursor
    cursor.close()

        # Returning JSON response
    result = {
        "total_eggs_this_week": result1['total_eggs_this_week'],
        "total_amount_this_week": result2['total_amount_this_week']
    }
    
    return jsonify(result)
   