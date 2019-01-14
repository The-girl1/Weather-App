let request = require('request');
const argv = require('yargs').argv;
let apikey = '7f9cf46540aaea17ab158a0ed56a80cc';
let city = argv.c || 'pune';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`;

request(url , function(err , response , body){
  if(err){
    console.log('error:' , error);
  }
  else {
    let weather = JSON.parse(body);
    let message = `It's a ${weather.main.temp} degrees in ${weather.name} !`;
    console.log(message);
  }
});
