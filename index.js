const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const playersRouter = require("./server/routers/players");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");



const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(logger);
app.use(express.static(__dirname, "/client/build"));



app.use("/players", playersRouter);
app.use("/auth", authRouter);


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
  
  app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
  });