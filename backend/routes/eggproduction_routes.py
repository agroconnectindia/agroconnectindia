# Developer: Prajwal Dhage
from flask import Blueprint, jsonify
from modules.Dashboard.eggproduction import eggshow

eggproduction_bp = Blueprint('eggproduction', __name__)  # Define a Blueprint

@eggproduction_bp.route('/eggproduction', methods=['GET', 'POST'])
def get_eggproduction():
    return eggshow()