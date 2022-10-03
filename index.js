// index.js
// where your node app starts

// init project
var express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config()


var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get('/api/:date?', (req, res)=>{
  const date = req.params.date

  let myDate;
  let responseObject;

  if(date === undefined){
    const now = new Date()

    const myDateUnix = now.getTime()
    
    const myDateUtc = now.toUTCString()


    responseObject = {
      "unix": myDateUnix,
      "utc": myDateUtc
    }
  }
  else{
    if(Number.isNaN(Number(date))){
      myDate = new Date(date)
    }
    else{
      myDate = new Date(parseInt(date))
      console.log('estoy en el else que indica que es un entero')
    }
  
    if(myDate == 'Invalid Date'){
      responseObject = {
        error: "Invalid Date"
      }
    }
    else{
      const myDateUnix = myDate.getTime()
    
      const myDateUtc = myDate.toUTCString()
  
      responseObject = {
        "unix": myDateUnix,
        "utc": myDateUtc
      }
    }
  }

  res.send(responseObject)
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
