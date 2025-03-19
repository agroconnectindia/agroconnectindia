import mysql.connector # type: ignore


def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="samarth@2006",
            database="agroconnect"
        )
        return conn
    except Exception as e:
        print(f"Error: {e}")
        return None