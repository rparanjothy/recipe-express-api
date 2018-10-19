const express = require("express");
const mongoose = require("mongoose");
const routes = require("./api.js");
const bodyParser = require("body-parser");

app = express();
dbURL = "mongodb://rk-write:rk-write123@ds157040.mlab.com:57040/rk-dev";
atlasURL =
  "mongodb://rk-write:rk-write@rk-cluster1-shard-00-00-3iyyx.mongodb.net:27017,rk-cluster1-shard-00-01-3iyyx.mongodb.net:27017,rk-cluster1-shard-00-02-3iyyx.mongodb.net:27017/test?ssl=true&replicaSet=rk-cluster1-shard-0&authSource=admin&retryWrites=true";

mongoose
  .connect(
    dbURL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to DB"); 
  })
  .catch(e => {
    console.log("Error connecting to DB" + e);
  });

port = process.env.port || 5000;

app.use(bodyParser.json());
app.use("/api", routes);

app.get("/", function(req, res) {
  //res.json({ msg: "Jesus Saves!" });

  res.send("<h2> Welcome </h2>");
});

app.listen(port, function() {
  console.log(`Running on port: ${port}`);
});
