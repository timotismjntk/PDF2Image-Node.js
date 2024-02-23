const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use("/", homeRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});