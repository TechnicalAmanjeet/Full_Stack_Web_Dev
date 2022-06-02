const express = require('express');
const { json } = require('express/lib/response');
const res = require('express/lib/response');
const https = require('https');

const app = express();
const port = 3000;
const url = "https://api.kanye.rest/";

app.use(express.json());




app.get("/",async (req, resp) => {
    const rqst = https.get(url, (response) => {
        // console.log("working fine");
        let body = "";
        console.log(response.statusCode);
        
        response.on('data', (chunck) => {
            body += chunck; // we get chunck as a buffer datatype but by concating it to body we  converted it to string.
            try {
                body = JSON.parse(body); // parsed api output into json and now we can do whatever we want.
                // do something with JSON
                // console.log(typeof(body));
                // console.log(typeof(json));

                // resp.send(body); // sending as a response to our client. in json format.
                // resp.send(body.quote); // sending as a response to our client. in string format.

                let output = body.quote;
        let result = `<h1> Today's best quote is =>  </h1> <h2> ==> ${output}</h2>`;
        resp.send(result);
            } catch (error) {
                console.error(error.message);
            };
        });
        
    })
    
    
    // resp.send("server is up and running." );
    
})

app.listen(port, (err)=> {
    if(err) throw err;
    console.log(`server is up and running at port ${port}`);
})