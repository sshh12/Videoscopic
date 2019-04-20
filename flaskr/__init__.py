from flask import Flask, request, jsonify
import json
import cv2

from . import nlp
from . import face_lookup


BUFFER_FN = 'buffer.jpg'

app = Flask(__name__, instance_relative_config=True)
facefacts = face_lookup.FaceFacts('73ae4c793bcd4d27a0a74e8bcb91a6c8')


@app.route('/')
def index():
    return 'Hacked Together API beta.v1.6.12'


@app.route('/api/text', methods=['POST'])
def api_text():
    return 'stuff'


@app.route('/api/image', methods=['POST'])
def api_image():
    file_data = request.files['img']
    file_data.save(BUFFER_FN)
    img = cv2.imread(BUFFER_FN)
    data = facefacts.run(img)
    print(data)
    return jsonify(data)
