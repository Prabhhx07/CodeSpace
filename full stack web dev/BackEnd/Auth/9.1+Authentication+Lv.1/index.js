import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db= new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Secrets",
  password: "Prabh_2005",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  const checkUser= await db.query("select email from users where email=$1", [email]);

  if (checkUser.rows.length > 0) 
    {
    return res.status(400).send("User already exists");
  }
  else{
  const result=await db.query("insert into users (email, password) values ($1, $2)", [email, password]);
  res.render("home.ejs");
  }
});

app.post("/login", async (req, res) => {
  const email= req.body.username;
  const password = req.body.password;

  const checkEmail=await db.query("select email from users where email=$1", [email]);
  
  if(checkEmail.rows.length>0){
    const checkPassword= await db.query("select password from users where email=$1", [email]);
    if(checkPassword.rows[0].password===password){
      res.render("secrets.ejs");
    }else{
      res.status(400).send("Incorrect Password");
    }
  }else{
    res.status(400).send("User does not exist");
  } 

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
