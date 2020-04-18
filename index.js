const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const usersRouter = require("./server/routers/users");
const authRouter = require("./server/routers/auth");
const { logger } = require("./server/middleware");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Welcome to our updated server!");
  });
  
  app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
  });