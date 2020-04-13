const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authenticationRouter = require("./authentication/router");
const userRouter = require("./user/router");
const friendsRouter = require("./friends/router");
const userLocationRouter = require("./userLocation/router");

const app = express();
const corsMiddleware = cors();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(jsonParser);

app.use(authenticationRouter);
app.use(userRouter);
app.use(friendsRouter);
app.use(userLocationRouter);

app.listen(
  port,
  console.log(
    `Portal ${port} boot up sequence initiated, Stargate link to homeworld confirmed!`
  )
);
