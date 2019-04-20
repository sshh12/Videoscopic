from flask import Flask
import json


from . import nlp
from . import face_lookup


app = Flask(__name__, instance_relative_config=True)
facefacts = face_lookup.FaceFacts('73ae4c793bcd4d27a0a74e8bcb91a6c8')


@app.route('/')
def index():
    return 'Hacked Together API beta.v1.6.12'


@app.route('/api/text')
def api_text():
    return nlp.analyze_entities("")


@app.route('/api/image')
def api_image():
    return nlp.analyze_entities("")
