const express = require('express');
const bodyParser = require("body-parser");
const playersRouter = require("./server/routers/players");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");



const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(logger);



app.use("/players", playersRouter);
app.use("/auth", authRouter);


app.get("/", (req, res) => {
    res.send("Welcome to Golf Skins!");
  });
  
  app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
  });