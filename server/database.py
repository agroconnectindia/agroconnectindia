
'''import mysql.connector  # For MySQL
# import psycopg2  # For PostgreSQL

def get_db_connection():
    """
    Function to connect to the SQL database.
    Replace the placeholders with your actual database credentials.
    """
    try:
      
        connection = mysql.connector.connect(
            host="localhost",       # e.g., "localhost"
            user="root",   # e.g., "root"
            password="samarth@2006",  # e.g., "password"
            database="agroconnect"   # e.g., "mydatabase"
        )

        
        print("Connected to the database successfully!")
        return connection

    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None'''

from datetime import datetime
import mysql.connector

def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="samarth@2006",
            database="agroconnect"
        )
        return connection
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None

def insert_next_seed_date(user_date):
    """
    Inserts the user-entered date into the nextseedinterval table.
    """
    try:
        conn = get_db_connection()
        if conn:
            cursor = conn.cursor()
            query = "INSERT INTO nextseedinterval (next_date) VALUES (%s)"
            cursor.execute(query, (user_date,))
            conn.commit()
            conn.close()
            print("Date inserted successfully!")
            return True
    except Exception as e:
        print(f"Error inserting date: {e}")
        return False
