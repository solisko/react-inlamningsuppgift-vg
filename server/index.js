const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
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

app.use(
  session({
    key: "userId",
    secret: "session-secret-key-1",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.error("Error fetching accounts:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json(result);
    }
  });
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

const verifyUser = (req, res, next) => {
  const token = req.headers("x-access-token");
  if (!token) {
    res.send("we need a token");
  } else {
    jwt.verify(token, "jwt-secret-key-number-1", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "faild to authenticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/profile", verifyUser, (req, res) => {
  res.send("You are authenticated");
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
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
              const id = result[0].userId;
              const token = jwt.sign({ id }, "jwt-secret-key-number-1", {
                expiresIn: "1d",
              });
              req.session.user = {
                userId: result[0].userId,
                username: result[0].username,
                email: result[0].email,
              };
              console.log(req.session.user);

              res.send({ auth: true, token: token, result: req.session.user });
            }
          });
        }
      }
    }
  );
});
