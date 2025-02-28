# routes.py
from flask import Flask
from other_module import some_function  # Import functions from other files

app = Flask(__name__)

@app.route('/home')
def home():
    return "Welcome to the Home Page!"

@app.route('/some-route')
def some_route():
    # Call the function from another module
    result = some_function()
    return f"Result from some_function: {result}"

# You can add more routes here