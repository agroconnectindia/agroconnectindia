# from flask import Flask, render_template, request
# import sqlite3

# app = Flask(__name__)

# DATABASE = 'agroconnect.db'

# def get_db_connection():
#     conn = sqlite3.connect(DATABASE)
#     conn.row_factory = sqlite3.Row
#     return conn

# def calculate_expected_values(crop):
#     """Calculates expected values and additional attributes."""
#     if crop:
#         crop["Expected_Water"] = round(crop["Water"] * 1.1, 2)
#         crop["Expected_Sunlight"] = round(crop["Sunlight"] * 0.95, 2)
        
#         # Crop Quality (Star Rating out of 5)
#         if crop["Water"] >= 50 and crop["Sunlight"] >= 8:
#             crop["Quality"] = 5  # Excellent
#         elif crop["Water"] >= 30 and crop["Sunlight"] >= 6:
#             crop["Quality"] = 4  # Good
#         elif crop["Water"] >= 20 and crop["Sunlight"] >= 4:
#             crop["Quality"] = 3  # Average
#         else:
#             crop["Quality"] = 2  # Poor
        
#         # Crop Status
#         if crop["Quality"] == 5:
#             crop["Status"] = "Healthy & Thriving 🌱"
#         elif crop["Quality"] >= 3:
#             crop["Status"] = "Moderate Growth 🌿"
#         else:
#             crop["Status"] = "Needs Attention ⚠️"
        
#         # Water Needed
#         if crop["Water"] < 20:
#             crop["Water_Needed"] = "Need 🚰"
#         elif 40<= crop["Water"] < 40:
#             crop["Water_Needed"] = "Less Needed 💧"
#         else:
#             crop["Water_Needed"] = "No Need ✅"
    
#     return crop

# @app.route('/', methods=['GET', 'POST'])
# def crops():
#     crop_data = None
#     if request.method == 'POST':
#         crop_name = request.form.get('crop_name')
#         if crop_name:
#             conn = get_db_connection()
#             cursor = conn.cursor()
#             cursor.execute("SELECT Name, Water, Sunlight FROM Crops WHERE Name = ?", (crop_name,))
#             row = cursor.fetchone()
#             conn.close()
            
#             if row:
#                 crop_data = dict(row)
#                 crop_data = calculate_expected_values(crop_data)
    
#     return render_template('crop.html', crop_data=crop_data)

# if __name__ == '__main__':
#     app.run(debug=True)
# app.py
from flask import Flask, render_template, request
from database import  get_db_connection# Import MySQL connection function

app = Flask(__name__)

def calculate_expected_values(crop):
    """Calculates expected values and additional attributes."""
    if crop:
        crop["Expected_Water"] = round(crop["Water"] * 1.1, 2)
        crop["Expected_Sunlight"] = round(crop["Sunlight"] * 0.95, 2)
        
        # Crop Quality (Star Rating out of 5)
        if crop["Water"] >= 50 and crop["Sunlight"] >= 8:
            crop["Quality"] = 5  # Excellent
        elif crop["Water"] >= 30 and crop["Sunlight"] >= 6:
            crop["Quality"] = 4  # Good
        elif crop["Water"] >= 20 and crop["Sunlight"] >= 4:
            crop["Quality"] = 3  # Average
        else:
            crop["Quality"] = 2  # Poor
        
        # Crop Status
        if crop["Quality"] == 5:
            crop["Status"] = "Healthy & Thriving 🌱"
        elif crop["Quality"] >= 3:
            crop["Status"] = "Moderate Growth 🌿"
        else:
            crop["Status"] = "Needs Attention ⚠️"
        
        # Water Needed
        if crop["Water"] < 20:
            crop["Water_Needed"] = "Need 🚰"
        elif 40 <= crop["Water"] < 40:
            crop["Water_Needed"] = "Less Needed 💧"
        else:
            crop["Water_Needed"] = "No Need ✅"
    
    return crop

@app.route('/', methods=['GET', 'POST'])
def crops():
    crop_data = None
    if request.method == 'POST':
        crop_name = request.form.get('crop_name')
        if crop_name:
            conn = get_db_connection()
            if conn:
                try:
                    cursor = conn.cursor(dictionary=True)  # Fetch results as dictionaries
                    cursor.execute("SELECT Name, Water, Sunlight FROM Crops WHERE Name = %s", (crop_name,))
                    row = cursor.fetchone()
                    cursor.close()
                    conn.close()
                    
                    if row:
                        crop_data = row
                        crop_data = calculate_expected_values(crop_data)
                except Exception as e:
                    print(f"Database error: {e}")
    
    return render_template('crop.html', crop_data=crop_data)

if __name__ == '__main__':
    app.run(debug=True)