import pyttsx3
import datetime

def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def wish_time_based():
    current_time = datetime.datetime.now().time()
    
    if datetime.time(5, 0) <= current_time < datetime.time(12, 0):
        speak("Good morning!")
    elif datetime.time(12, 0) <= current_time < datetime.time(17, 0):
        speak("Good afternoon!")
    elif datetime.time(17, 0) <= current_time < datetime.time(20, 0):
        speak("Good evening!")
    elif datetime.time(20, 0) <= current_time <= datetime.time(23, 59):
        speak("Good night! Have a restful sleep.")
    else:
        speak("Hello! How can I assist you today?")

if __name__ == "_main_":
    wish_time_based()