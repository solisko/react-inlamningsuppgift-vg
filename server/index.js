const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const mysql = require("mysql2");
const salt = 10;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "hjhsEnnisJack1922skom:HEJ",
  database: "webshop_db",
});

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.post("/create", (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing password" });
    db.query(
      "INSERT INTO accounts (username, email, password) VALUES (?,?,?);",
      [username, email, hash],
      (err, result) => {
        if (err) {
          console.error("Error creating account:", err);
          res.status(500).json({ error: "Internal server error" });
        } else {
          res.status(201).json({
            message: "Account created successfully",
            account: { username, email, password },
          });
        }
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM accounts WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (result.length === 0) {
          res.status(401).json({ error: "Invalid username." });
        } else {
          const user = result[0];
          bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
              console.error("Error comparing passwords:", err);
              res.status(500).json({ error: "Internal server error" });
            } else if (!match) {
              res.status(401).json({ error: "Incorrect password." });
            } else {
              const username = result[0].username;
              const token = jwt.sign({ username }, "jwt-secret-key-number-1", {
                expiresIn: "1d",
              });
              res.cookie("token", token);
              res.status(200).json({
                message: "Login successful",
                account: { username },
                token: token,
              });
            }
          });
        }
      }
    }
  );
});
