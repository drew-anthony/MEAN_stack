const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
let counter = 0;

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
   console.log("\n=> Client/socket is connected!");
   console.log("=> Client/socket id is: ", socket.id);

socket.on('color_pressed', (color) => {
console.log(`The background color: ${color}`);
socket.emit('background_color', {color: color});
});





require("./server/config/routes")(app);