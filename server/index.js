const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "hjhsEnnisJack1922skom:HEJ",
  database: "webshop_db",
});

// db.connect;
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/accounts", (req, res) => {
  db.query("SELECT * FROM accounts;", (err, result) => {
    if (err) {
      console.error("Error fetching accounts:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/accounts", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "INSERT INTO accounts (username, password) VALUES (?,?);",
    [username, password],
    (err, result) => {
      if (err) {
        console.error("Error creating account:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json({
          message: "Account created successfully",
          account: { username, password },
        });
      }
    }
  );
});
