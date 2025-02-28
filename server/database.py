
import mysql.connector  # For MySQL
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
        return None