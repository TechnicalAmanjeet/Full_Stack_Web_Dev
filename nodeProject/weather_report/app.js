
const express = require('express');
const https = require('https');

const PORT = 3000;
const app = express(); // created express app

// for encodeing data which we get from html form then use have to use this
app.use(express.urlencoded({extended:true})) // for parsing url data which comes from html forms.
// app.use(express.json());   // not this

app.get("/", (req, resp) => {
    resp.sendFile(__dirname + "/index.html");
});

// app.post("/", (req, resp) => {
//     console.log(req.body.cityName);
// })

app.post('/getTemp', (req, resp) => {

    // take weather report from external api api.openweathermap.com and the response back result.
    const cityName = req.body.cityName;
    const endPoint = 'https://api.openweathermap.org/data/2.5/weather';
    const appid = '73fd617da47317ac3423699dc44dea1f';
    const unit = 'metric';  //standard, metric and imperial units are available

    const url = `${endPoint}?APPID=${appid}&q=${cityName}&units=${unit}`;
    // console.log(url);

    // now will fetch data from external api which is at above url.
    https.get(url, (respons) => {
        respons.on('data', (chunk) => {
            let responByApiJson = JSON.parse(chunk);
            console.log(responByApiJson);

            let result = `<h1> Temperature in ${responByApiJson.name} is ${responByApiJson.main.temp} degree celcius. `;
            // result = `<<= alert(result)>>`;
            // let output = alert(result);

            // as we know that we can't use more then one resp.send() method for a single route. so instead of it
            // we can use resp.write() method as many times as we want. followed by resp.send() method call.
            resp.write(result);
            resp.write("<h2> The weather condition is " + responByApiJson.weather[0].description + " </h2>");
            resp.send();
        })
    });
})

app.listen(PORT, () => {
    console.log(`App is up and running at port ${PORT}`);
});