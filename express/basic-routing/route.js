const express = require('express');

const port = 3000;
const app = express();

// r1 => GET route.
app.get("/", (req,resp) => {
    resp.send("you are quarying for GET route at '/'");
});

// r2 => POST route.
app.post("/", (req, resp) => {
    resp.send("just got a POST request at '/' route.");
});

// r3 => PUT route.
app.put("/", (req, resp) => {
    resp.send("just got a PUT request at '/' route.");
});

// r4 => DELETE route.
app.delete("/", (req, resp) => {
    resp.send("just got a DELETE request at '/' route.");
});

app.listen(port, (err) => {
    if(err) throw err;
    else{
        console.log("app is running..");
    }
});