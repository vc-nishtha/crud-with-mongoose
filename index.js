const express = require("express");
const initiateMongoServer = require("./config/db");
const router = require('./routes/index');

const app = express();
initiateMongoServer();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port= ${port}`);
});
