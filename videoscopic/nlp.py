import googleapiclient.discovery
import argparse
import json
import sys
import wikipedia
from fuzzywuzzy import process as fuzzproc


def analyze_entities(text, encoding='UTF32'):
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

    entries = response['entities']

    data = []

    for word in entries:
        if(word['type'] == 'PERSON' or word['type'] == 'ORGANIZATION'):
            # only adds data if there is a wiki page for it
            if('wikipedia_url' in word['metadata']):
                data.append(_get_wiki_info(word['name'], word['metadata']['wikipedia_url'], True))
    # print(data)

    return data


def _get_wiki_info(name, wiki, haspage):
    info = {}
    info['name'] = name
    if not haspage:
        page_name = wikipedia.search(name)[0]
        print("u",page_name)
    else:
        page_name = wiki.split("/")[-1]
    page = wikipedia.page(page_name)
    summary = page.summary

    info['url'] = wiki
    info['summary'] = summary
    info['short_summary'] = summary[:summary.index('.', 50)+1]
    info['image_url'] = fuzzproc.extractOne(name + ' Portrait', page.images)[0]

    return info
