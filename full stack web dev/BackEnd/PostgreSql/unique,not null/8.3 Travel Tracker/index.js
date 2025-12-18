import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Prabh_2005",
  port: 5432,
});
db.connect();
let countries = [];
db.query("SELECT country_code FROM visited_countries", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    countries = res.rows.map((row) => row.country_code);
  }
  db.end();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
