import numpy as np
import time
import dlib
import cv2

#
from clarifai.rest import Image as ClImage
from clarifai.rest import ClarifaiApp
app = ClarifaiApp(api_key='73ae4c793bcd4d27a0a74e8bcb91a6c8')
model = app.models.get('celeb-v1.3')


face_detector = dlib.get_frontal_face_detector()
face_predictor = dlib.shape_predictor('shape_predictor_68_face_landmarks.dat')


def extract_faces(full_img_color):

    faces = None

    full_img = cv2.cvtColor(full_img_color, cv2.COLOR_BGR2GRAY)

    rects = face_detector(full_img, 1)
    if len(rects) == 0:
        return faces

    min_x = 99999
    min_y = 99999
    max_x = 0
    max_y = 0

    for rect in rects:
        if rect.area() < 18000:
            continue
        left = rect.left() - 100
        top = rect.top() - 100
        height = rect.height() + 200
        width = rect.width() + 200
        min_x = min(left, min_x)
        min_y = min(top, min_y)
        max_x = max(left + width, max_x)
        max_y = max(top + height, max_y)

    return full_img_color[min_y:max_y, min_x:max_x]


face_crop = extract_faces(cv2.imread('test2.jpg'))
cv2.imwrite('tmp.jpg', face_crop)

# x['outputs'][0]['data']['regions'][0]['data']['face']['identity']['concepts'][0]['name']
res = model.predict_by_filename('tmp.jpg')
regions = res['outputs'][0]['data']['regions']
for face in regions:
    main_concept = face['data']['face']['identity']['concepts'][0]
    name = main_concept['name']
    conf = main_concept['value']
    print(name, conf)
