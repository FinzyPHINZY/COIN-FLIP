const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  const random = Math.trunc(Math.random() * 10 + 1);
  console.log(random);
  if (random % 2 === 0) {
    res.json("Head");
  } else {
    res.json("Tails");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...BETTA go catch it`);
});
