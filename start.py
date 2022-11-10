# E-Commerce Website
# This is the website I am building for my coursework

# import flask | redirect user to a web page | url_for is used for creating a URL 
# to prevent the overhead of having to change URLs 
# throughout the application (including in templates)
from fileinput import filename
from os import abort
from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)

# home page
@app.route('/home/')
def home():
    return render_template('home.html')


# sell page. 
# this will open a new tab
@app.route('/sell/')
def sell():
    return render_template('sell.html')

# buy page. 
# this will open a new tab
@app.route('/buy/')
def buy():
    return render_template('buy.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)