const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/src", express.static("src"));

app.get("/", (req, res) => {
  res.render("prime-factorial");
});

app.listen(3000);
