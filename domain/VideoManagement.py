import cv2


class VideoLoader:
    def __init__(self, address) -> None:
        super().__init__()
        self.cap = cv2.VideoCapture(address)

    def readRGBFrame(self, htmlOutput=False):
        ret, frame = self.cap.read()
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        if htmlOutput:
            return self.convertToHTMLStyle(frame)
        return rgb

    def readGrayFrame(self, htmlOutput=False):
        ret, frame = self.cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        if htmlOutput:
            return self.convertToHTMLStyle(frame)
        return gray

    @staticmethod
    def convertToHTMLStyle(frame):
        return b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + frame.tobytes() + b'\r\n\r\n'

    def __del__(self):
        if self.cap:
            self.cap.release()
