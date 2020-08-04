
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
// Mapping the EJS template engine to ".html" files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

global.bid=require('./Bid.class');
global.timer=0;
app.get('/', function (req, res) {
  res.render("index.html");
})
//place bid
app.get('/placebid', function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    var bidderName=req.query.bidderName;
    var amount=+req.query.amount;
    global.bid.name=bidderName;
    global.bid.amount=amount;
    // 输出 JSON 格式
    response = {
        result:("Place bid success"+bid.amount+bid.name)
    };
    setTimeout(setTimer, 1000);
    res.end(JSON.stringify(response));
 })
 app.get('/getBidder', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  
  // 输出 JSON 格式
  response = {
      bidder:global.bid,
      timer:global.timer
  };
  res.end(JSON.stringify(response));
})
 function setTimer() {
  if(global.timer<120)
  {
    global.timer++;
    setTimeout(setTimer, 1000);
  }
}



 


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
//print host
  console.log("App is listening on http://%s:%s", host, port)

})


