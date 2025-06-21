const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use("/src", express.static("src"));
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.render("prime-factorial", (err, html) => {
    if (err) {
      console.error("EJS render error:", err);
      res.status(500).send("An error occurred while rendering the page.");
    } else {
      res.send(html);
    }
  });
});

//app.listen(3000);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
