const express = require("express");
const app = express();
const morgan = require("morgan");
const dbConfig = require("./config/mogodb");
const router = require("./routers/user");

// app.use(morgan("combined"));
app.use(express.json());

dbConfig();
app.use(router);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
