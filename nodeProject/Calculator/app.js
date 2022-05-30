const express = require('express');

const app = express();
const port = 3000;


app.get("/", (req, resp) => {
    const filePath = __dirname + "/index.html";
    resp.sendFile(filePath);
});

// app.use(express.json()); // for parsing json data.
app.use(express.urlencoded({extended:true})) // for parsing url data which comes from html forms.

app.post("/", (req, resp)=> {
    // console.log("something coming from server..")
    const num1 = parseInt(req.body.fstNumber);
    const num2 = parseInt(req.body.sndNumber);
    resp.send(`sum of ${num1} and ${num2} is ${num1+num2}`);
    // resp.send("your response sumbmitted successfully.")
})

app.listen(port, (err)=>{
    if(err) throw err;
    console.log("server is running at " + port);
});