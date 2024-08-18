from tkinter import*
import requests

url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather"

querystring = {"city":"Seattle"}

headers = {
	"X-RapidAPI-Key": "1c2e9965fcmsh702185a83e9dc40p108280jsnec7a56e43859",
	"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())