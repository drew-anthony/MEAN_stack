const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;

var session = require('express-session');
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'itsasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on('connection', function (socket) {
  
    socket.on('posting_form', function (data) {

        var random_number = Math.floor(Math.random() * 1000 + 1);


        socket.emit('alpha', { user: data.user });
        socket.emit('random', {num:random_number});
        console.log(data.user)

    });      
});




require("./server/config/routes")(app);
