import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Prabh_2005",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items order by id asc;");
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: result.rows,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1);", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const editTitle = req.body.updatedItemTitle;
  const editId = req.body.updatedItemId;
  await db.query("update items set title = $1 where id = $2;", [
    editTitle,
    editId,
  ]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteItem = req.body.deleteItemId;
  await db.query("DELETE FROM items WHERE id = $1;", [deleteItem]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
