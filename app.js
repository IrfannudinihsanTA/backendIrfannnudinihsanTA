// app js
const express = require("express");
require("dotenv").config();
const app = express();



const PORT = process.env.PORT;
const router = require('./routes')


app.use(router)

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
