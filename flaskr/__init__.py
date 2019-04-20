# import os

from flask import Flask
import argparse
import json
import sys



import googleapiclient.discovery

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    @app.route('/nlp')
    def hello():
        return analyze_entities("")

    return app

def analyze_entities(text, encoding='UTF32'):
    text = "Joanne Rowling, who writes under the pen names J. K. Rowling and Robert Galbraith, is a British novelist and screenwriter who wrote the Harry Potter fantasy series."
    body = {
        'document': {
            'type': 'PLAIN_TEXT',
            'content': text,
        },
        'encoding_type': encoding,
    }

    service = googleapiclient.discovery.build('language', 'v1')

    request = service.documents().analyzeEntities(body=body)
    response = request.execute()
    return json.dumps(response, indent=2)

    # return response