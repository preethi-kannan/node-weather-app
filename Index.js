const request = require('request');
const argv = require('yargs').argv;

let apiKey = "37d4abc0abaaec250ca806af11dbf4d2";
let city = argv.c || 'cary'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`



request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
}
);