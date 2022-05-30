const express = require('express');

const app = express();
const port = 3000;


app.get("/", (req, resp) => {
    resp.send("Requesting at home route.");
});

app.listen(port, (err)=>{
    if(err) throw err;
    console.log("server is running at " + port);
});