const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const server = app.listen(1337);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.set("views", path.join(__dirname + "./views"));
app.set("view engine", "ejs");

require("./server/config/mongoose");
require("./server/config/routes")(app);