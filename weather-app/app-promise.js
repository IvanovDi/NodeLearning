const yargs = require('yargs');
const axios = require('axios');
const apiKey = '3a54224e57993d038e63dd122f3c6903';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    console.log(response.data.results[0].formatted_address);

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.forecast.io/forecast/${apiKey}/${lat},${lng}`
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currntly ${temperature} it feel like ${apparentTemperature}`);
})
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers.');
        } else {
            console.log(error.message);
        }
    });