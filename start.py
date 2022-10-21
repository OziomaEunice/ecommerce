# This is where all the programs will run

# import 
from flask import Flask

app = Flask(__name__)

@app.route('/')
def start():
    return 'Coursework!'