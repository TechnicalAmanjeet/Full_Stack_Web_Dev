const express = require('express');

const port = 5000;
const app = express(); // initialize express app.

// create basic get route on /
app.get("/", (req, resp) => {
    resp.send("app is running perfectly fine");
})


// creating app to listen at a particular port.
app.listen(port, () => {
    console.log(`This app is running at port ${port}`);
});