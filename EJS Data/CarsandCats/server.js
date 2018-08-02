const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})