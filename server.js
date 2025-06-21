const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/src", express.static("src"));
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.render("prime-factorial");
});

<<<<<<< Updated upstream
app.listen(port, () => {
  `Server started on port ${port}`;
=======
//app.listen(3000);
app.listen(port, () => {
  console.log("Server started on port 8080");
>>>>>>> Stashed changes
});
