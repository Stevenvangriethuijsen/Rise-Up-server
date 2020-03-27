const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./user/router");

const app = express();
const corsMiddleware = cors();
const jsonParser = bodyParser.json();

const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(jsonParser);
app.use(userRouter);

app.listen(
  port,
  console.log(
    `Portal ${port} boot up sequence initiated, Stargate link to homeworld confirmed!`
  )
);
