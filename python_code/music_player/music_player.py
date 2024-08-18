from pygame import mixer
import sys
import time
mixer.init()

print("1 for Shiv_tandv")
print("2 for Barsaat_Ho")
print("3 for Barsaat_Ki")
print("4 for Bewafa_TeraC")
print("5 for O_Aasman_Wale")
print("6 for Dil-Mera-Chahe")
print("7 for Teri_Galliyon")
while True:
    user_input = input('Command:')
    if user_input == '1':
        mixer.music.load('Shiv_tandv.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '2':
        mixer.music.load('Barsaat_Ho.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '3':
        mixer.music.load('Barsaat_Ki.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '4':
        mixer.music.load('Bewafa_TeraC.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '5':
        mixer.music.load('O_Aasman_Wale.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '6':
        mixer.music.load('Dil-Mera-Chahe.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == '7':
        mixer.music.load('Teri_Galliyon.mp3')
        mixer.music.play()
        time.sleep(3)
    if user_input == 'x':
        sys.exit()