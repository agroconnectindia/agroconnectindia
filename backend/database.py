import mysql.connector
# Database Configuration
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "root3112",
    "database": "agroconnect"
}

def db_connection():
    """Establish a database connection."""
    return mysql.connector.connect(**DB_CONFIG)