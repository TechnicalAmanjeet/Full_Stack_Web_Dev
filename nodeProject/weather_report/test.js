const https = require('https');
const express = require('express');

const app = express();
const port = 3000;
let url = 'https://www.nitmz.ac.in/';
// url = "https://api.openweathermap.org/data/2.5/weather";

https.get(url, (res) => {
    console.log(res.headers);
    let body = "Amanjeet ";
    console.log(body);
    res.on('data', (chunk) =>{
        body += chunk;
        console.log(body);
    })
})


app.listen(port, () => {
    console.log("app is up and running.");
})