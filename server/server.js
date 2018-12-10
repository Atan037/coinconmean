//installed middleware
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//node.js pre-installed middleware
const path = require("path");
const http = require("http");

//Database connection
const db = require("./db");
const app = express();

// Set Port
const port = process.env.PORT || "3000";
const expenseRoutes = require("./routes/expense.routes");

// const permitCrossDomainRequests = function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   // some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
//   if ("OPTIONS" === req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };

// app.use(permitCrossDomainRequests);
app.use(cors());

// Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routers
app.use("/api", expenseRoutes);

app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Running server on localhost:${port}`);
});
