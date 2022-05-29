const express = require('express');

const port = 3000;
const app = express();

// r1 => GET route.
app.get("/", (req,resp) => {
    resp.send("you are quarying for GET route on '/'")
})

app.listen(port, (err) => {
    if(err) throw err;
    else{
        console.log("app is running..");
    }
})