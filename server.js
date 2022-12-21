const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Routes = require("./routes/mailing.routes");

const corstAllowAll = {
  credentials: true,
  origin: true,
  "Access-Control-Allow-Origin": "*",
};

dotenv.config();
app.use(cors(corstAllowAll));
app.options("*", cors());
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.PORT);
});

app.get("/", (req, res) => {
  const resu =
    "<h1>Welcome to mailing service :  " + process.env.PORT + "</h1>";
  res.send(resu);
});

app.get("/test", (req, res) => {
  const resu = "<h1>this is just a test</h1>";
  res.send(resu);
});

app.use("/api", Routes);
