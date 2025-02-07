# 
import sqlite3

def fetch_Login_records():
    conn = sqlite3.connect('agroconnect.db')
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT * FROM Login")  # Adjust table name and query as needed
        rows = cursor.fetchall()
    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
        rows = []

    conn.close()
    
    print("Fetched poultry records:", rows)  # Check what data is being returned
    return rows
