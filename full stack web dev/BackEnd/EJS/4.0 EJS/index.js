import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date("july 3 2025");
  const day = today.getDay();

  let type = "weekday";
  let adv = "time to work hard";

  if (day === 0 || day === 6) {
    type = "weekend";
    adv = "enjoy";
  }
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
