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
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {

  res.render("index.ejs", { countries: countries, total: countries.length });
});


app.post("/add", async (req, res) => {
  const country_name = req.body.country;
  
  try {

    const countryResult = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) = LOWER($1)",
      [country_name]
    );
    
    if (countryResult.rows.length === 0) {
      res.send("Country not found in database.");
      return;
    }
    
    const country_code = countryResult.rows[0].country_code;
    
    
    await db.query(
      "INSERT INTO visited_countries (country_code) VALUES ($1)",
      [country_code]
    );
    
    countries.push(country_code);
    res.redirect("/");
    
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.send("Error adding country. It may already be visited.");
  }
});




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
