const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
let counter = 0;

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on('connection', function (socket) {
    io.emit('counter', {num:counter});
    socket.on('count',function(){
        counter ++;
        socket.emit('counter', {num:counter});
        console.log(counter)
        io.emit('counter', {num:counter});
    })
    socket.on('reset',function(){
        counter = 0
        socket.emit('counter', {num:counter});
        io.emit('counter', {num:counter});
    })
})

require("./server/config/routes")(app);