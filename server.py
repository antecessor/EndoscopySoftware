#!/usr/bin/env python

import os
from flask import Flask, render_template, Response, request, flash

from domain.VideoManagement import VideoLoader
from domain.utils import uploadFile

app = Flask(__name__, template_folder="./web/app/public", static_folder="./web/app/src")


@app.route("/")
def index():
    return render_template('index.html')


# ToDo error handling
@app.route("/load", methods=['POST', 'PUT'])
def loadVideo():
    if 'file' not in request.files:
        flash('No file part')
    file = request.files['file']
    address = uploadFile(file)
    vid = VideoLoader(address)
    frame = vid.readRGBFrame(htmlOutput=True)
    return Response(frame, mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == "__main__":
    app.run(port=os.environ.get('PORT', 3000), debug=True)
