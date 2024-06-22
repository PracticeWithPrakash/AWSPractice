const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is home route");
});

app.get("/data", (req, res) => {
  res.json({
    data: [
      {
        name: "Prakash",
        work: "Software developer",
      },
      {
        name: "Tushar",
        work: "Backend developer",
      },
    ],
  });
});

app.post("/data", (req, res) => {
  res.send("You send an post request");
});

app.listen(4040, () => {
  console.log("App is listening on port 4040");
});
