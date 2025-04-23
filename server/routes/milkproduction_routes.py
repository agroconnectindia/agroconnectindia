# Developer: Prajwal Dhage
from flask import Blueprint, jsonify
from modules.Dashboard.milkproduction import milkshow

milkproduction_bp = Blueprint('milkproduction', __name__)  # Define a Blueprint

@milkproduction_bp.route('/milkproduction', methods=['GET', 'POST'])
def get_milkproduction():
    return milkshow()

    