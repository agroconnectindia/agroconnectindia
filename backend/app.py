from flask import Flask, render_template
from flask_cors import CORS
from routes.weather_routes import weather_bp  # Import weather route
from routes.milkproduction_routes import milkproduction_bp  # Import milkproduction route
from routes.eggproduction_routes import eggproduction_bp  # Import eggproduction route

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def backend_working():
    return render_template('index.html')

app.register_blueprint(weather_bp)  # Register weather route
app.register_blueprint(milkproduction_bp)  # Register milkproduction route
app.register_blueprint(eggproduction_bp)  # Register eggproduction route

if __name__ == '__main__':
    app.run()