from flask import Flask, Blueprint, url_for
from flask_debugtoolbar import DebugToolbarExtension
from controller.home import *




app = Flask(__name__)
app.secret_key = '1'
app.debug = True

toolbar = DebugToolbarExtension(app)

app.register_blueprint(home, url_prefix = '/')

if __name__ == '__main__':
    app.run()