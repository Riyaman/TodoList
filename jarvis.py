import pyttsx3
import datetime


engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
print(voices[1].id)
engine.setProperty('voice', voices[1].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()
def wishme():
    hour = datetime.datetime.now()
    if hour >=10 and hour<=12:
        speak("Good Morning!")
    elif hour>=12 and hour<6:
        speak("Good Afternoon")
    else:
        speak("Good Evening")
    speak("Hello janu i am your jarvis how may i help you")

if __name__ =="__main__":
    wishme()
#def takeCommand():
  #  r = sr.Recognizer()
   # Microphone() as source:
