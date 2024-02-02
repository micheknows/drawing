
from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    tools = ['pen', 'circle', 'rect', 'text']
    return render_template('index.html', tools=tools)