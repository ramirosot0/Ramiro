var express = require('express')
var app = express()

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.use('/', function (req, res, next) {
    res.send('hello world')
    next();
})

app.use('/', function (req, res, next) {
    req.send(getRandomInt(10));
})



const port = 8080;
console.log('listening on port', port);
app.listen(port)
