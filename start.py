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
# How this will work is by using {{ url_for('sell') }} in the html files,
# (in the section of sell), it will link to the html files and open them 
# on the browser.
@app.route('/sell/')
def sell():
    return render_template('sell.html')

# buy page. 
# this will open a new tab
# How this will work is by using {{ url_for('buy') }} in the html files,
# (in the section of buy), it will link to the html files and open them 
# on the browser.
@app.route('/buy/')
def buy():
    return render_template('buy.html')


# register page. 
# this will open a new tab
# How this will work is by using {{ url_for('modal') }} in the html files,
# (in the section of modal), it will link to the html files and open them 
# on the browser.
@app.route('/register/')
def modal():
    return render_template('modal.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)