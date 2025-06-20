const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/src", express.static("src"));
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.render("prime-factorial");
});

app.listen(port, () => {
  `Server started on port ${port}`;
});
