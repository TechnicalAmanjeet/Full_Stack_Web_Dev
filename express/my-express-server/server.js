const express = require('express');

const port = 5000;
const app = express(); // initialize express app.

// create basic get route on /
app.get("/", (req, resp) => {
    resp.send("app is running perfectly fine");
});

app.get("/home", (req, resp) => {
    resp.send("<h1>Requesting at home route. </h1>");
    // resp.send("<h2>Requesting at home route.</h2>") // error we can send only once.
});

app.get("/about", (req, resp) => {
    resp.send("Requesting at about route");
});

app.get("/contact", (req, resp) => {
    resp.send("requesting at contact route.")
})


// sending static file through resp.sendfile method.
app.use(express.static('static'));  // now we can access all the file by using browser which is inside static file.
// static file include html, css, js and image files.

// creating app to listen at a particular port.
app.listen(port, () => {
    console.log(`This app is running at port ${port}`);
});