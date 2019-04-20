import googleapiclient.discovery
import argparse
import json
import sys

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
    print(json.dumps(response, indent=2)
)
    return json.dumps(response, indent=2)