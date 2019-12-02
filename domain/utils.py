import os


def uploadFile(file):
    address = os.path.join("./resources/", file.filename)
    file.save(address)
    return address
