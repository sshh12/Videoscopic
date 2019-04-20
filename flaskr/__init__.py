# import os

from flask import Flask
import argparse
import json
import sys
import nlp

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    @app.route('/nlp')
    def hello():
        return nlp.analyze_entities("")
    return app

    # return response