const url = 'https://the-weather-api.p.rapidapi.com/api/weather/mumbai';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c2e9965fcmsh702185a83e9dc40p108280jsnec7a56e43859',
		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}