from flask import Flask
import json


from . import nlp


app = Flask(__name__, instance_relative_config=True)


@app.route('/')
def index():
    return 'Hacked Together API beta.v1.6.12'


@app.route('/api/text')
def api_text():
    return nlp.analyze_entities("")


@app.route('/api/image')
def api_image():
    return nlp.analyze_entities("")
