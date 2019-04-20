from clarifai.rest import ClarifaiApp
from fuzzywuzzy import process as fuzzproc
import wikipedia
import numpy as np
import time
import dlib
import cv2


TMP_FN = 'tmp.jpg'


class FaceFacts:

    def __init__(self, clarify_apikey):
        self.clarify_app = ClarifaiApp(api_key=clarify_apikey)
        self.model = self.clarify_app.models.get('celeb-v1.3')
        self.face_detector = dlib.get_frontal_face_detector()

    def run(self, image):

        self._save_face_crop(image)
        people = self._get_people()

        data = []
        for name in people:
            data.append(self._get_person_info(name))

        return data

    def _get_person_info(self, name):

        info = {}
        info['name'] = name

        page_name = wikipedia.search(name)[0]
        page = wikipedia.page(page_name)
        summary = page.summary

        info['url'] = 'https://en.wikipedia.org/wiki/{}'.format(page_name.replace(' ', '_'))
        info['summary'] = summary
        info['short_summary'] = summary[:summary.index('.')+1]
        info['image_url'] = fuzzproc.extractOne(name, page.images)[0]

        return info

    def _get_people(self):

        people = []

        res = self.model.predict_by_filename(TMP_FN)
        regions = res['outputs'][0]['data']['regions']
        for face in regions:
            main_concept = face['data']['face']['identity']['concepts'][0]
            name = main_concept['name']
            conf = main_concept['value']
            if conf > 0.4:
                people.append(name.title())

        return people

    def _save_face_crop(self, image):

        grey_img = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        rects = self.face_detector(grey_img, 1)
        if len(rects) == 0:
            return None

        min_x = 9e9
        min_y = 9e9
        max_x = 0
        max_y = 0

        for rect in rects:
            if rect.area() < 10000:
                continue
            left = rect.left() - 100
            top = rect.top() - 100
            height = rect.height() + 200
            width = rect.width() + 200
            min_x = min(left, min_x)
            min_y = min(top, min_y)
            max_x = max(left + width, max_x)
            max_y = max(top + height, max_y)

        crop = image[min_y:max_y, min_x:max_x]
        cv2.imwrite(TMP_FN, crop)


def b64_to_array(b64data):
    file_bytes = np.asarray(bytearray(b64data), dtype=np.uint8)
    return cv2.imdecode(file_bytes, 0)

if __name__ == '__main__':
    ff = FaceFacts('73ae4c793bcd4d27a0a74e8bcb91a6c8')
    ff.run(cv2.imread('test2.jpg'))
