const express = require("express");
const app = express();
const port = 3000;

const users = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

app.use((req, res, next) => {
  const apiKey = req.query.apiKey;
  if (!apiKey) {
    return res.status(401).json({ error: "API key is required" });
  }

  const user = users.find((user) => user.apiKey === apiKey);
  if (!user) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  req.user = user;
  next();
});

app.get("/student", (req, res) => {
  res.json({ message: "sucess", users });
});

app.get("/teacher", (req, res) => {
  res.json({ message: "sucess", users });
});

app.get("/subject", (req, res) => {
  res.json({ message: "sucess", users });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
