const apiKey = '3a54224e57993d038e63dd122f3c6903';
const request = require('request');


var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports.getWeather = getWeather;